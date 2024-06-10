import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { setCurrentTab } from "@/utils/currentTabMethods";

const courses = () => {

    useEffect(() => {
        setCurrentTab('courses');
    }, []);

    return (
        <>
        <Navbar />
            <div className="h-[90vh] w-[100%] flex justify-center items-center" >
            <h1>
                This page is coming soon!</h1>
            </div>
        </>
    )
}

export default courses;