import React from "react";
import Posts from "../components/Posts";
import BlogNav from "../components/blognav";

const BlogPage = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <BlogNav />
            <Posts />
        </div>
    );
};

export default PortfolioPage;