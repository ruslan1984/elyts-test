import { FC, memo } from "react";
import MainLayout from "templates/mainLayout";
import Pagination from "organisms/pagination";
import Loader from "atoms/loader";
import NewsItem, { TItemArticle } from "organisms/newsItem";
import "./styles.css";

interface IPresenter {
  currentPage: number;
  pagesCount: number;
  loading: boolean;
  data?: TItemArticle[];
  pageClick: (page: number) => () => void;
}

const Presenter: FC<IPresenter> = ({
  currentPage,
  data,
  pagesCount,
  loading,
  pageClick,
}: IPresenter) => (
  <MainLayout>
    <h1 className="newsTitle">Our News</h1>
    {loading ? (
      <Loader />
    ) : (
      <div className="newsList">
        {data?.map(
          ({ author, title, publishedAt, description, urlToImage }, index) => (
            <NewsItem
              key={index}
              author={author}
              title={title}
              publishedAt={publishedAt}
              description={description}
              urlToImage={urlToImage}
            />
          )
        )}
      </div>
    )}
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      pageClick={pageClick}
    />
  </MainLayout>
);

export default memo(Presenter);
