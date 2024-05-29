"use client";

import { useGetPostsQuery } from "@/features/post/postSlice";
import Image from "next/image";
import LoadingGif from "../../public/images/loading.gif";
import PostCard from "./_components/post/PostCard";

export default function Home() {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const sortedPosts = posts ? [...posts].sort((a, b) => b.id - a.id) : [];

  if (isLoading) {
    return (
      <div className="absolute top-[40%] left-[48%]">
        <Image src={LoadingGif} height={50} width={50} alt="" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-[40%] left-[48%]">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-3xl font-bold">Recent Posts</h2>
      {sortedPosts?.map((post, inx) => (
        <PostCard post={post} key={post?.id} />
      ))}
    </div>
  );
}
