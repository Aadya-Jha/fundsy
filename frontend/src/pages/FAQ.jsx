import React from "react";
import faqImg from "../assets/FAQS.jpg"
import Questions from '../components/questions.jsx'

const FAQ = () => {
    return(
        <div className="bg-beige-light min-h-screen w-screen text-3xl font-serif font-extrabold flex  ">
            <div className="w-2/3 flex flex-col  py-4">
                <h1 className="text-violet-950 text-5xl flex justify-center items-start "
                style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.3)'}}>FAQs</h1>
                
                    <Questions ques="What is Fundsy and how does it work?"
                     ans="Fundsy is a blockchain-based crowdfunding platform that allows students in financial need to receive donations and government
                      grants through verified smart contracts." 
                    />
                    <Questions ques="Who can donate on Fundsy?"
                     ans="Anyone with a Web3 wallet can become a donor and support verified student profiles on the platform." 
                    />
                    <Questions ques="How do I connect my wallet to donate or receive funds?"
                     ans="Click the “Connect Wallet” button on Fundsy and link your Web3 wallet, like MetaMask, to start sending or receiving funds." 
                    />
                    <Questions ques="Is Fundsy only for students?"
                     ans="Yes, Fundsy is designed specifically to support students who are facing financial challenges and need verified aid." 
                    />
                    <Questions ques="Are there any fees for using Fundsy?"
                     ans="Fundsy is free for both donors and students. Gas fees may apply depending on the blockchain network being used." 
                    />
                    <Questions ques="Is my donation traceable?"
                     ans="Absolutely. All donations on Fundsy are recorded on the blockchain for full transparency and can be tracked in real-time." 
                    />
                    <Questions ques="What makes Fundsy different from traditional crowdfunding platforms?"
                     ans="Fundsy uses blockchain to ensure transparency, eliminates intermediaries, and ensures that funds go directly to verified students." 
                    />
                    <Questions ques="How are donations managed?"
                     ans="All donations are processed securely via integrated payment gateways and are directly transferred to the student's registered
                      account or wallet." 
                    />
                
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <img className="h-72 w-96 rounded-2xl shadow-xl" src={faqImg} alt="FAQs image" />
            </div>
        </div>
    );
}

export default FAQ;