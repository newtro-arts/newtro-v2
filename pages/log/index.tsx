import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Head from "next/head";
import getParagraphPosts from "@/lib/log/getPosts";

interface ParagraphPost {
  id: string;
  title: string;
  content: string;
}

const Log: NextPage = () => {
  const [posts, setPosts] = useState<ParagraphPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<ParagraphPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getParagraphPosts("0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38");
        setPosts(fetchedPosts);
        console.log(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handlePostClick = (post: ParagraphPost) => {
    setSelectedPost(post);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary-dark text-fourth-green pt-16">
      <Head>
        <title>Log</title>
      </Head>
      <Header />
      <main className="mx-8">
        <h1 className="text-2xl pt-4 pb-2 pragmatica-text uppercase">LOG</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-4">
            {posts.map((post: ParagraphPost) => (
              <div 
                key={post.id} 
                className="bg-fifth-purple p-4 rounded-lg cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <h2 className="text-xl font-bold pragmatica-text">{post.title}</h2>
                <p className="text-sm mt-2">Click to read more</p>
              </div>
            ))}
          </div>
          {selectedPost && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Log;
