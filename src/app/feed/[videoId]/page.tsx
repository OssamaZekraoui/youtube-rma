"use client"


interface PageProps {
    params: Promise<{videoId : String }>;
}

const Page = async ({params} : PageProps) => {
    console.log("server component")
    const {videoId} = await params;
    return (
        <div>
            Video {videoId } page  
        </div>
    );

};
export default Page