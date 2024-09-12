import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Head from "next/head";
import { Article } from "@/types/article";
import { GetServerSideProps } from 'next'
import fetchParagraphPostContent from '@/lib/log/fetchParagraphPostContent'
import { renderArticle } from '../../../types/ArticlePostContent';

interface ArticleProps {
  article: Article;
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const id = context.params?.id as string
  console.log(id)

  try {
    const article = await fetchParagraphPostContent(id)
    console.log(article)
    return {
      props: { article }
    }
  } catch (error) {
    console.error('Error fetching post content:', error)
    return {
      notFound: true 
    }
  }
}

const LogArticle: React.FC<ArticleProps> = ({ article }) => {
  const articleContent: any = JSON.parse(article.json);
  console.log(article)
  return (
    <div className="w-full min-h-screen bg-primary-dark text-fourth-green pt-14">
      <Head>
        <title>Newtro Arts</title>
      </Head>
      <Header />
      {renderArticle(articleContent)}
      <div dangerouslySetInnerHTML={{ __html: article.markdown }} />
      {/* <ArticlePage article={articleContent} /> */}
    </div>
  );
};

export default LogArticle;