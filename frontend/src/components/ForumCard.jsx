import React from "react";

const ForumCard = (props) => {

    return(
        <div className="h-44 w-48 md:w-72 bg-[#F3E8FF] border-solid hover:border-[#ded3ea] border-2 mt-5 px-4 mx-5 rounded-xl shadow-2xl">
            <h4 className="font-sans text-xl font-medium text-gray-800">{props.postTitle}</h4>
            <p className="text-gray-700 font-normal pt-3">{props.postContent}</p>
        </div>
    );
}

export default ForumCard;