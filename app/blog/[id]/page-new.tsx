import { getAllPostIds, getPostData } from "@/lib/posts";

export async function generateStaticParams() {
  const ids = getAllPostIds();
  return ids.map((id) => ({ id }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = (await getPostData(params.id)) as {
    id: string;
    contentHtml: string;
    title: string;
    date: string;
  };

  return (
    <div className="min-h-screen bg-[rgb(20,20,20)] text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {postData.title}
          </h1>

          {/* Meta information */}
          <div className="flex items-center text-gray-400 text-sm font-medium mb-8">
            <time dateTime={postData.date} className="tracking-wide">
              {new Date(postData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="mx-3">•</span>
            <span className="tracking-wide">5 min read</span>
          </div>
        </header>

        {/* Article content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div
            className="blog-content text-gray-200 leading-relaxed [&_h1]:text-white [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:mt-12 [&_h1]:mb-4 [&_h1]:leading-tight [&_h2]:text-white [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-tight [&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:text-white [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-3 [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-gray-200 [&_strong]:text-white [&_strong]:font-semibold [&_code]:bg-gray-700 [&_code]:text-yellow-300 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-medium [&_pre]:bg-gray-800 [&_pre]:border [&_pre]:border-gray-600 [&_pre]:rounded-lg [&_pre]:p-6 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:text-gray-200 [&_pre_code]:p-0 [&_pre_code]:text-sm [&_pre_code]:leading-relaxed [&_blockquote]:border-l-4 [&_blockquote]:border-gray-500 [&_blockquote]:pl-6 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-gray-300 [&_ul]:my-6 [&_ul]:pl-6 [&_ol]:my-6 [&_ol]:pl-6 [&_li]:mb-2 [&_li]:leading-relaxed [&_li]:text-gray-200 [&_hr]:border-0 [&_hr]:h-px [&_hr]:bg-gray-600 [&_hr]:my-12 [&_a]:text-blue-400 [&_a]:no-underline [&_a]:font-medium [&_a:hover]:text-blue-300 [&_a:hover]:underline [&_img]:rounded-lg [&_img]:my-8 [&_img]:max-w-full [&_img]:h-auto"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <a
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
}
