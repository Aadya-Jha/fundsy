import React, {useState} from "react";
import ForumCard from './ForumCard'

const Forum = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [post, setPost] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) return;

        const newPost = {title, content};
        setPost([newPost, ...post]);
        
        setTitle("");
        setContent("");
    }

    return (
        <div className="bg-beige-light min-h-screen w-screen pt-8">
            <h1 className="font-sans font-bold text-center text-purple-600 text-4xl">Forum</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col pr-3">
                    <input className="h-20  px-3 w-11/12 rounded-xl m-3 shadow-xl border-beige-dark hover:border-purple border-2"
                     type="text" 
                     placeholder="Post Title"
                     value={title} 
                     onChange={(e) => setTitle(e.target.value)}
                    />
                    <input className="h-40 px-3 w-11/12 rounded-xl m-3 shadow-xl border-beige-dark hover:border-purple border-2"
                     type="text"
                     placeholder="Post Content"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                    />
                    <button className="h-10 w-24 rounded-xl m-5 shadow-xl font-sans font-semibold text-gray-900 hover:bg-[#E5F4E3] text-center 
                     bg-purple">
                     Submit
                    </button>
                </div>
            </form>
            <h2 className="font-sans font-bold text-purple-600 text-3xl text-center">
                All Posts
            </h2>
            <ForumCard  
             postTitle="Welcome to the forum" 
             postContent="Feel free to ask questions and share your thoughts"
            />
            <div className="flex flex-col mt-5 ">
             {post.map((post, index) => (
             <ForumCard
             key={index}
             postTitle={post.title}
             postContent={post.content}
             className="bg-olive"
            />
            ))}
           </div>
        </div>
    );
}

export default Forum;