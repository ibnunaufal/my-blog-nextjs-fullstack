'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details() {
    const params = useParams();
    const [blog, setBlog] = useState<{ title: string, content: string, createdAt: string }>(); 

    useEffect(() => {
        fetch(`/api/blogs/${params.id}`).then(res => res.json()).then(data => {
            setBlog(data);
        });
    }, [params.id]);

    return <div className="container mx-auto">
        <div className="prose">
            <h2>{blog?.title}</h2>
            <p> { blog?.content }</p>
        </div>
    </div>
}
