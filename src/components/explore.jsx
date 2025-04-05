import React from 'react';
import Card from './card'
import img1 from '../assets/women-in-stem.jpg'
import img2 from '../assets/merit-based.jpg'
import img3 from '../assets/need-based.jpg'
import img4 from '../assets/research-and-innovation.jpg'
import img5 from '../assets/sports.jpg'

const Explore = (props) => {
    return(
        <div className="bg-[oklch(14.1%_0.005_285.823)] min-h-screen w-screen ">
            <h1 className="text-white text-3xl font-sans sm:px-5 font-bold text-center py-4"
            style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.3)'}}>Fundsy Scholarship Hub</h1>
            <p className="text-white text-xl font-sans font-semibold text-center px:10 sm:px-8 ">Unlocking education through verified scholarships. Every grant is transparently tracked for fairness and impact</p>
            <div className='grid lg:grid-cols-3 lg:gap-0 place-items-center md:grid-cols-2 md:gap-0 sm:grid-cols-1 sm:gap-0'>
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