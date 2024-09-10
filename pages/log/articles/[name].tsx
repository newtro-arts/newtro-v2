import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Head from "next/head";
import { Article } from "@/types/article";

interface ArticleProps {
  article: Article;
}

const LogArticle: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="w-full min-h-screen bg-primary-dark text-fourth-green pt-14">
      <Head>
        <title>{article.title} | Newtro Arts</title>
      </Head>
      <Header />
      <ArticlePage article={article} />
    </div>
  );
};

export default LogArticle;