import React from 'react'
import Image from 'next/image'
import Button from '@/components/Commons/Button'

interface ArticleSideContentProps {
  title: string;
  date: string;
  author: string;
  image: string;
}

const ArticleSideContent = ({ title, date, author, image }: ArticleSideContentProps) => {
  return (
    <div className="py-8 lg:py-0 px-4">
    <p className='text-lg pragmatica-text text-xl lg:text-2xl uppercase'>{title}</p>
    <p className='text-sm'>{date}</p>
      <div className='flex flex-col text-sm gap-y-2'>
      <p>Written by</p>
      <Image src={image} alt={author} width={100} height={100}/>
      </div>
      <div className='flex flex-col align-top text-sm gap-y-4 my-4'>
      <Button
          href="/share"
          variant="primary"
          className="w-fit self-center lg:self-start mr-4" >
          Share article
        </Button>
        <Button
          href="/share"
          variant="tertiary"
          className="w-fit bg-fifth-purple self-center lg:self-start mr-4" >
          Copy URL
        </Button>
    </div>
  </div>

  )
}

export default ArticleSideContent