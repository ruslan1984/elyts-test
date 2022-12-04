import { useEffect, memo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Presenter from "./Presenter";
import { reducerType } from "store";
import { TItemArticle } from "organisms/newsItem";
import { requestNews } from "./reducer";

const News = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<TItemArticle[] | undefined>();
  const { pagesCount, news, loading } = useSelector(
    (state: reducerType) => state.newsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    (async () => {
      await dispatch(requestNews(currentPage));
      const d = news.find((item) => item.page === currentPage);
      setData(d?.articles);
    })();
  }, [dispatch, news, currentPage]);

  const pageClick = useCallback(
    (page: number) => () => {
      dispatch(requestNews(currentPage));
      setCurrentPage(page);
    },
    [dispatch, currentPage]
  );

  return (
    <Presenter
      loading={loading}
      pageClick={pageClick}
      data={data}
      currentPage={currentPage}
      pagesCount={pagesCount}
    />
  );
};

export default memo(News);
