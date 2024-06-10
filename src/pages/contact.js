import Navbar from "@/components/Navbar";
import { setCurrentTab } from "@/utils/currentTabMethods";
import { useEffect } from "react";

const contact = () => {


    useEffect(() => {
        setCurrentTab('contact');
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

export default contact;