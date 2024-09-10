async function fetchParagraphPostContent(id: string): Promise<object> {
    const url = `https://ar-io.dev/${id}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const content = await response.json();
      
      return content;
    } catch (error) {
      console.error('Error fetching Paragraph post content:', error);
      throw error;
    }
  }
  
  export default fetchParagraphPostContent;