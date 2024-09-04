export interface Article {
    title: string;
    subtitle: string;
    date: string;
    author: string;
    image: string;
    images: string[];
    content: string;
}

export interface ArticlePageProps {
  article: Article
}
