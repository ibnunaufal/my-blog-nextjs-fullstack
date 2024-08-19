import exp from "constants";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const id = params.id;
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    const blog = await res.json();
    return {
        title: `${blog.title} | Blog`,
        description: blog.content,
        // author: blog.author,
        // image: blog.image,
        // openGraph: {},
        // twitter: {}
    };
}

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {

    return <div className="container mx-auto">
        {children}
    </div>

}