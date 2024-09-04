import React from 'react'
import ArticleHeader from './ArticleHeader'
import ArticleContent from './ArticleContent'
import { bosqueGracias } from '@/sources/articles/bosque-gracias'
import ArticleSideContent from './ArticleSideContent'
import ArticleMarquee from './Marquee'

const ArticlePage = () => {
  return (
    <div className='w-full min-h-screen'>
      <ArticleHeader title={bosqueGracias.title} subtitle={bosqueGracias.subtitle} image='/blog-entry.png' date='2021-01-01' />
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <ArticleContent content={bosqueGracias.content}/>
        </div>
        <div className='lg:col-span-4'>
          <div className='sticky top-16'>
            <ArticleSideContent title={bosqueGracias.title} subtitle={bosqueGracias.subtitle} date={bosqueGracias.date} author={bosqueGracias.author} image={bosqueGracias.image} />  
          </div>
        </div>
      </div>
      <ArticleMarquee />
    </div>
  )
}

export default ArticlePage