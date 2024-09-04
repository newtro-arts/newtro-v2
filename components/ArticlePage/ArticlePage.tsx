import React from 'react'
import ArticleHeader from './ArticleHeader'
import ArticleContent from './ArticleContent'
import ArticleSideContent from './ArticleSideContent'
import ArticleMarquee from './Marquee'
import ArticleGallery from './ArticleGallery'
import { ArticlePageProps } from '@/types/article'

const ArticlePage = ({ article }: ArticlePageProps) => {
  return (
    <div className='w-full min-h-screen'>
      <ArticleHeader title={article.title} subtitle={article.subtitle} image={article.image} date={article.date} />
      <ArticleGallery images={article.images} />
      <div className='grid grid-cols-1 lg:grid-cols-12 my-4 border-b border-fourth-green pb-4 mx-8'>
        <div className='lg:col-span-8'>
          <ArticleContent content={article.content}/>
        </div>
        <div className='lg:col-span-4'>
          <div className='sticky top-16'>
            <ArticleSideContent 
              title={article.title} 
              subtitle={article.subtitle} 
              date={article.date} 
              author={article.author} 
              image={article.image} 
            />  
          </div>
        </div>
      </div>
      <ArticleMarquee />
    </div>
  )
}

export default ArticlePage