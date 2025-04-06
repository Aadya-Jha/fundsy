import React from "react";
import faqImg from "../assets/FAQS.jpg"
import Questions from './questions.jsx'

const Faq = () => {
    return(
        <div className="bg-[oklch(14.1%_0.005_285.823)] min-h-screen w-screen text-3xl font-serif font-extrabold flex  ">
            <div className="w-2/3 flex flex-col  py-4">
                <h1 className="text-white text-5xl flex justify-center items-start "
                style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.3)'}}>FAQs</h1>
                
                    <Questions ques="What is Fundsy and how does it work?" ans="Fundsy is a blockchain-based crowdfunding platform that allows students in financial need to receive donations and government grants through verified smart contracts." />
                
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <img className="h-64 w-11/12 rounded-xl shadow-[0_4px_20px_rgba(255,235,130,0.15)] hover:shadow-[0_6px_25px_rgba(255,235,130,0.25)]" src={faqImg} alt="FAQs image" />
            </div>
        </div>
    );
}

export default Faq;