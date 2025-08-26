import { getAllPostIds, getPostData } from "@/lib/posts";

export async function generateStaticParams() {
    const ids = getAllPostIds();
    return ids.map((id) => ({ id }));
}

export default async function PostPage({ params }) {
    const postData = await getPostData(params.id);

    return (
        <article>
            <h1>{postData.title}</h1>
            <div>{postData.date}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
}
