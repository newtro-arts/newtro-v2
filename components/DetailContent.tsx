import React from 'react';
import Image from 'next/image';

interface WebAsset {
  mime?: string;
  originalAsset?: string;
  previewAsset?: string;
}

const DropContent: React.FC<WebAsset> = ({ mime, originalAsset, previewAsset }) => {
  const renderContent = () => {
    switch (mime) {
      case 'video/mp4':
        return (
          <div className="w-full md:w-[50%]">
            <video autoPlay muted loop>
              <source type={mime} src={originalAsset} />
            </video>
          </div>
        );

      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
      case 'image/jpg':
        return (
          <Image
            src={`https://storage.newtro.xyz/${originalAsset}`}
            alt='preview'
            width={200}
            height={200} 
            className="w-full md:w-[50%] h-[90%] object-cover aspect-square"
          />
        );

      case 'model/gltf':
      case 'application/pdf':
      case 'model/gltf-binary':
      case 'audio/wav':
      case 'text/html':
      case '':
        return (
          <Image
            src={`https://storage.newtro.xyz/${previewAsset}`}
            alt={'preview'}
            width={400}
            height={400}
            className="w-full md:w-[50%] object-cover aspect-square"
          />
        );

      default:
        return <div>Unsupported media type</div>;
    }
  };

  return renderContent();
};

export default DropContent;
