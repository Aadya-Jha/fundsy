import React from 'react'

const Card = (props) => {
    return(
        <div className='h-80 w-64 bg-[oklch(93.6%_0.088_100.17)] mx-8 my-4 rounded-lg flex flex-col items-center hover:bg-[oklch(82%_0.088_100.17)] 
        shadow-[0_4px_20px_rgba(255,235,130,0.15)] hover:shadow-[0_6px_25px_rgba(255,235,130,0.25)] hover:scale-95 hover:cursor-pointer'>
            <img className='h-48 w-full flex flex-col items-center rounded-lg justify-center shadow-lg ' src={props.source} alt="" />
            <h3 className='text-black font-sans text-xl font-semibold text-center'>{props.title}</h3>
            <p className='text-black font-sans text-lg font-normal text-center'>{props.amount}</p>
            <p className='text-black font-sans text-lg font-normal text-center'>{props.time}</p>
        </div>
    );
}

export default Card;