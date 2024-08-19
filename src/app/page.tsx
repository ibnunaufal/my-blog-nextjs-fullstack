'use client';
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();
  const [blogs, setBlogs] = useState<{id: number, title: string, content: string, createdAt: string }[]>([]);

  useEffect(() => {
    fetch('/api/blogs').then(res => res.json()).then(data => {
      setBlogs(data);
    });
  },[])

  return <div className="container mx-auto ">
    {blogs.map(blog => <div key={blog.id} className="card shadow-md p-4 mt-4 hover:shadow-lg" onClick={() => router.push(`/${blog.id}`)}>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <p>{blog.content}</p>
        <p className="text-sm text-gray-500">{dayjs(blog.createdAt).format("DD MMM YYYY")}</p>
      </div>
    
    </div>)}
  </div>
}
