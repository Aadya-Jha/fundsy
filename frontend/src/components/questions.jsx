import React,{useState} from "react";

const Questions = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleStatus = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={`mx-6 my-4 px-8 py-4 w-full transition-all ease-in-out duration-300  ${isOpen ? "max-h-64" : "max-h-20"  }`}>
            <div className="  flex flex-row justify-between items-center h-24 bg-beige-dark rounded-xl hover:shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
                <p className="font-sans text-xl font-semibold text-violet-950 ">{props.ques}</p>
                <button onClick={toggleStatus} className="flex justify-center items-center text-white h-16 w-16">{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && (
                <div className="text-lg font-sans text-violet-950 bg-slate-200 rounded-xl font-medium hover:shadow-[0_4px_10px_rgba(255,255,255,0.2)]"> {props.ans}</div>
            )}
        </div>
    );
}

export default Questions;