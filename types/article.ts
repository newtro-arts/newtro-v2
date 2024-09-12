import { Author } from "@/pages/log";

export interface Article {
  title: string;
  staticHtml: string;
  json: string;
  markdown: string;
  createdAt: string;
  authors: Author[];
}

export interface ArticlePageProps {
  article: {
    title: string;
    subtitle: string;
    image: string;
    date: string;
    author: string;
    content: ArticlePostContent;
  };
}

export interface ArticlePostContent {
  type: string;
  content: ContentItem[];
}

export interface ContentItem {
  type: string;
  attrs?: {
    textAlign?: string;
    float?: string;
    width?: number | null;
    videoId?: string;
    src?: string;
    alt?: string | null;
    title?: string | null;
    blurdataurl?: string;
    nextheight?: number;
    nextwidth?: number;
  };
  content?: ContentItem[];
  text?: string;
  marks?: Mark[];
}

interface Mark {
  type: string;
  attrs?: {
    href?: string;
    target?: string;
    rel?: string;
    class?: string;
  };
}
