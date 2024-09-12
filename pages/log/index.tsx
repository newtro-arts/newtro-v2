import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Head from "next/head";
import getParagraphPosts from "@/lib/log/getPosts";
import Link from "next/link";
import Image from "next/image";
import { format } from 'date-fns';

interface ParagraphPost {
  id: string;
  title: string;
  content: string;
  arweaveId: string;
  authors: Author[];
  createdAt: string; 
}

interface Author {
  avatar: string;
  name: string;
  wallet_address: string;
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
    <div className="flex flex-col min-h-screen bg-primary-dark text-fourth-green pt-16 pb-4">
      <Head>
        <title>Log</title>
      </Head>
      <Header />
      <main className="mx-8">
        <h1 className="text-3xl pb-2 pragmatica-text uppercase">LOG</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-4">
            {posts.map((post: ParagraphPost) =>  {
              console.log(post)
              const formattedDate = format(new Date(parseInt(post.createdAt)), 'MMM d, yyyy');
              return (
              <Link
                href={`/log/articles/${post.id}`}
                className="border border-fourth-green p-4 rounded-cards"
              >
                <p className="text-xs pragmatica-text uppercase">Article</p>
                <h2 className="text-xl font-bold pragmatica-text uppercase">{post.title}</h2>
                <div className="flex items-end gap-2">
                  <Image src={post.authors[1].avatar} alt={post.authors[1].name} width={32} height={32} />
                  <div className="flex flex-col text-xs">
                    <p className="font-semibold">{post.authors[1].name}</p>
                    <p>{formattedDate}</p>
                  </div>
                </div>
              </Link>
            )
            })}
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
