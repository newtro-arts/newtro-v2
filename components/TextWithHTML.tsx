import React from 'react';

interface TextWithHTMLProps {
  description: string;
}

const TextWithHTML: React.FC<TextWithHTMLProps> = ({ description }) => (
  <div className='mb-4 text-sm' dangerouslySetInnerHTML={{ __html: description }} />
);

export default TextWithHTML;
