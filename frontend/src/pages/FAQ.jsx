import React from "react";
import { motion } from "framer-motion";
import Questions from '../components/questions.jsx'
import Navbar from "../components/Navbar";
import Forum from "../components/Forum.jsx";

const FAQ = () => {
    return(
        <div className="overflow-x-hidden max-w-full">
            <Navbar />
            <div className="bg-beige-light min-h-screen w-full  text-3xl font-serif font-extrabold flex  ">
            
            <div className="md:w-2/3 sm:w-5/6 w-10/12 flex flex-col sm:pl-4 py-4">
                <motion.h1 
                 initial={{ opacity: 0, y: -30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                className="text-purple text-5xl flex justify-center items-start font-sans "
                style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.3)'}}>
                    FAQs
                </motion.h1>
                
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
        </div>
        <Forum />
        </div>
    );
}

export default FAQ;