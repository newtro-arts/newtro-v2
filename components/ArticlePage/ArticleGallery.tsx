import React from 'react'
import Image from 'next/image'

interface ArticleGalleryProps {
  images: string[]
}

const ArticleGallery: React.FC<ArticleGalleryProps> = ({ images }) => {
  return (
    <div className="max-w-full overflow-x-auto mx-8 border-y border-fourth-green py-4">
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[600px] h-[400px]">
            <Image 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              width={600} 
              height={400} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleGallery