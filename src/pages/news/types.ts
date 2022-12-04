import { TItemArticle } from "organisms/newsItem";

export type TPageNews = {
  page: number;
  articles: TItemArticle[];
};
export type TNewsSlice = {
  news: Array<TPageNews>;
  pagesCount: number;
  pageSize: number;
  loading: boolean;
  error?: string;
};

export type TNewsResponse = {
  status: string;
  totalResults: number;
  articles: TItemArticle[];
  message?: string;
};
