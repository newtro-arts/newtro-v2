import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Head from "next/head";
import { Article } from "@/types/article";
import { GetServerSideProps } from "next";
import fetchParagraphPostContent from "@/lib/log/fetchParagraphPostContent";
import { renderArticle } from "../../../types/ArticlePostContent";
import { format } from "date-fns";
import ArticleSideContent from "@/components/ArticlePage/ArticleSideContent";
import ArticleMarquee from "@/components/ArticlePage/Marquee";

interface ArticleProps {
  article: Article;
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const id = context.params?.id as string;
  console.log(id);

  try {
    const article = await fetchParagraphPostContent(id);
    console.log(article);
    return {
      props: { article },
    };
  } catch (error) {
    console.error("Error fetching post content:", error);
    return {
      notFound: true,
    };
  }
};

const LogArticle: React.FC<ArticleProps> = ({ article }) => {
  const articleContent: any = JSON.parse(article.json);
  const formattedDate = format(
    new Date(parseInt(article.createdAt)),
    "MMM d, yyyy"
  );

  console.log(article);
  return (
    <div className="w-full min-h-screen bg-primary-dark text-fourth-green pt-14">
      <Head>
        <title>{article.title}</title>
      </Head>
      <Header />
      <div className="container">
        <div className="flex flex-col mx-8 border-b border-fourth-green py-4">
          <h5 className="text-2xl pragmatica-text uppercase">{article.title}</h5>
          <p className="text-xs">{formattedDate}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-4 border-b border-fourth-green pb-4 gap-x-2 px-8">
          <div className="lg:col-span-8">
            {renderArticle(articleContent)}
            <div
              dangerouslySetInnerHTML={{ __html: article.markdown }}
              className="w-full"
            />
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-16">
              <ArticleSideContent
                title={article.title}
                date={formattedDate}
                author={article.authors[1].name}
                image={article.authors[1].avatar}
              />
            </div>
          </div>
        </div>
        <ArticleMarquee />
      </div>
    </div>
  );
};

export default LogArticle;
