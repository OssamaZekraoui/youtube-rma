"use client";
import { useEffect } from "react";

   

const Page = () => {

useEffect( () => {
    console.log("here am i rended !")
    }
)
const data = db.select().from(videos).where(eq(videos.id,"123"));
    return (
        <div>
            {videos.name}
        </div>
    );

};
export default Page