import Image from 'next/image'
import React from 'react'

interface ArticleHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
    date: string;
}

const ArticleHeader = ({ title, subtitle, image, date }: ArticleHeaderProps) => {
  return (
    <div className='w-full h-fit flex flex-col'>
        {image.endsWith('.mov') ? (
            <video 
                src={image} 
                autoPlay
                muted
                loop   
                className='w-full aspect-video object-cover'
                style={{ height: '50vh' }}
            />
        ) : (
            <Image 
                src={image} 
                alt={title} 
                width={2000} 
                height={1000} 
                style={{ height: '40vh' }} 
                className='aspect-video object-cover'
            />
        )}
        <div className='mx-8 my-4'>
          <h1 className='pragmatica-text uppercase text-2xl'>{title}</h1>
          <p>{subtitle}</p>
          <p>{date}</p>
        </div>
    </div>
  )
}

export default ArticleHeader