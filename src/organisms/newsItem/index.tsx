import { FC } from "react";
import { TItemArticle } from "./types";
import "./styles.css";
const newsItem: FC<TItemArticle> = ({
  author,
  title,
  publishedAt,
  description,
  urlToImage,
}: TItemArticle) => {
  return (
    <div className="newsItem">
      <img className="newsItemImg" src={urlToImage} alt="" />
      <div className="newsItemContent">
        <div className="newsItemAuthor">{author}</div>
        <div className="newsItemDate">{publishedAt}</div>
        <div className="newsItemTitle">{title}</div>
        <div
          className="newsItemDesc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
export default newsItem;
export type { TItemArticle } from "./types";
