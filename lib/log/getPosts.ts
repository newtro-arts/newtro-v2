import fetchParagraphPostContent from './fetchParagraphPostContent';

interface ParagraphPost {
  id: string;
  title: string;
  content: string;
}

interface GraphQLResponse {
  data: {
    transactions: {
      edges: Array<{
        node: {
          id: string;
          tags: Array<{ name: string; value: string }>;
        };
      }>;
    };
  };
}

async function getParagraphPosts(wallet: string): Promise<any> {
  const url = 'https://arweave.net/graphql';
  const query = `
    query GetParagraphPosts($wallet: String!) {
      transactions(tags:[
        {
          name:"AppName",
          values:["Paragraph"],
        },
        {
          name:"Contributor",
          values:[$wallet]
        }
      ], sort:HEIGHT_DESC, first: 10){
        edges {
          node {
            id
            tags {
              name
              value
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { wallet },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: GraphQLResponse = await response.json();
    const posts = result.data.transactions.edges.map(edge => ({
      id: edge.node.id,
      title: edge.node.tags.find(tag => tag.name === 'Title')?.value || 'Untitled',
    }));

    const postsWithContent = await Promise.all(
      posts.map(async post => {
        const content = await fetchParagraphPostContent(post.id);
        console.log(content);
        if(!content) return;
        return { ...post, ...content, id: post.id };
      })
    );

    return postsWithContent;
    
  } catch (error) {
    console.error('Error fetching Paragraph posts:', error);
    throw error;
  }
}

export default getParagraphPosts;
