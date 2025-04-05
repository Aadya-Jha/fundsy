import React from 'react';
import Card from './card'
import img1 from '../assets/women-in-stem.jpg'
import img2 from '../assets/merit-based.jpg'
import img3 from '../assets/need-based.jpg'
import img4 from '../assets/research-and-innovation.jpg'
import img5 from '../assets/sports.jpg'

const Explore = (props) => {
    return(
        <div className="bg-[oklch(14.1%_0.005_285.823)] h-screen w-screen">
            <h1 className="text-white text-3xl font-sans font-bold text-center py-4">Fundsy Scholarship Hub</h1>
            <p className="text-white text-xl font sans font-semibold text-center ">Unlocking education through verified scholarships. Every grant is transparently tracked for fairness and impact</p>
            <div className='flex'>
                <Card source={img1} title="Women in STEM Scholarship" amount="₹1,00,000 per student" time="20 days left"/>
                <Card source={img3} title="Need-Based Scholarship" amount="Covers tuition + ₹10,000 stipend" time="30 days left"/>
                <Card source={img2} title="Merit-Based Scholarship" amount="₹50,000 per recipient" time="15 days left"/>
                <Card source={img4} title="Research & Innovation Grant" amount="Up to ₹2,00,000" time="45 days left"/>
                <Card source={img5} title="Sports Scholarship" amount="Full tuition + training support" time="10 days left"/>
            </div>
        </div>
    );
} 

export default Explore;