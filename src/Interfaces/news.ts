export interface NewsResponse {
  bayes_category_id: number;
  category: string;
  content_views_count: number | null;
  date: number;
  img_url: string;
  news_id: number;
  reactions: Array<any>;
  reactions_count: number | null;
  source_id: number;
  source_name: string;
  title: string;
  url: string;
}

export interface News {
  imgUrl: string;
  id: number;
  title: string;
  sourceName: string;
  url: string;
}
