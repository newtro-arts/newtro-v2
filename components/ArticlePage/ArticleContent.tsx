interface ArticleContentProps {
  content: string
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const formatContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('<strong>') && paragraph.endsWith('</strong>')) {
        return (
          <p key={index} className="font-bold mb-2">
            {paragraph.replace(/<\/?strong>/g, '')}
          </p>
        )
      }
      return <p key={index} className="mb-2">{paragraph}</p>
    })
  }

  return (
    <div className='mx-8 max-w-full'>
      {formatContent(content)}
    </div>
  )
}

export default ArticleContent