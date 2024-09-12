import React from 'react';

const Paragraph: React.FC<{ content: any[], attrs?: any }> = ({ content, attrs }) => (
  <p style={{ textAlign: attrs?.textAlign || 'left' }}>
    {content.map((item, index) => <ContentRenderer key={index} item={item} />)}
  </p>
);

const Figure: React.FC<{ content: any[], attrs?: any }> = ({ content, attrs }) => (
  <figure style={{ float: attrs?.float || 'none', width: attrs?.width || 'auto' }}>
    {content.map((item, index) => <ContentRenderer key={index} item={item} />)}
  </figure>
);

const Image: React.FC<{ attrs: any }> = ({ attrs }) => (
  <img 
    src={attrs.src} 
    alt={attrs.alt || ''} 
    title={attrs.title || ''} 
    width={attrs.nextwidth} 
    height={attrs.nextheight}
  />
);

// const Figcaption: React.FC<{ content: any[] }> = ({ content }) => (
//   <figcaption>
//     {content.map((item, index) => <ContentRenderer key={index} item={item} />)}
//   </figcaption>
// );

const Youtube: React.FC<{ attrs: any }> = ({ attrs }) => (
  <iframe 
    width="560" 
    height="315" 
    src={`https://www.youtube.com/embed/${attrs.videoId}`} 
    title={attrs.title || 'YouTube video player'} 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  ></iframe>
);

const Text: React.FC<{ item: any }> = ({ item }) => {
  if (!item.marks) return <>{item.text}</>;
  
  let result = <>{item.text}</>;
  item.marks.forEach((mark: any) => {
    switch (mark.type) {
      case 'bold':
        result = <strong>{result}</strong>;
        break;
      case 'link':
        result = <a href={mark.attrs.href} target={mark.attrs.target} rel={mark.attrs.rel}>{result}</a>;
        break;
      // Añade más casos según sea necesario
    }
  });
  return result;
};

const ContentRenderer: React.FC<{ item: any }> = ({ item }) => {
  switch (item.type) {
    case 'paragraph':
      return <Paragraph content={item.content} attrs={item.attrs} />;
    case 'figure':
      return <Figure content={item.content} attrs={item.attrs} />;
    case 'image':
      return <Image attrs={item.attrs} />;
    // case 'figcaption':
    //   return <Figcaption content={item.content} />;
    case 'youtube':
      return <Youtube attrs={item.attrs} />;
    case 'text':
      return <Text item={item} />;
    default:
      return null;
  }
};

export const renderArticle = (articleContent: any): React.ReactNode => {
  return (
    <article>
      {articleContent.content.map((item: any, index:number) => (
        <ContentRenderer key={index} item={item} />
      ))}
    </article>
  );
};
