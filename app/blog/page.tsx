import BlogCard from "@/app/components/blog/BlogCard";
import {getSortedPostsData} from "@/lib/posts";
import Link from "next/link";

const Page = () => {
    const allPostsData = getSortedPostsData();
    return (
        <main className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] min-h-screen bg-[rgb(20,20,20)] text-white dark:text-black">
            <div className={"hidden lg:block"}></div>
            <div className="w-full flex flex-col px-6 lg:px-12 md:border-x border-gray-200/10 border-dashed">
                <div className="flex flex-col gap-3 py-16">
                    <h1 className="text-2xl">Blog</h1>
                    <p className="text-gray-300">I sometimes write about the things I build and what I learn.</p>
                </div>
                <div className="pt-5 flex flex-col gap-16">
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li key={id}>
                                <Link href={`/blog/${id}`}>{title}</Link>
                                <br />
                                <small>{date}</small>
                            </li>
                        ))}
                    </ul>
                    {/*<BlogCard />*/}
                    {/*<BlogCard />*/}
                    {/*<BlogCard />*/}
                </div>
            </div>
            <div className={"hidden lg:block"}></div>
        </main>
    )
}

export default Page