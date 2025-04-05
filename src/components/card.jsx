import React from 'react'

const Card = (props) => {
    return(
        <div className='h-80 w-64 bg-[oklch(93.6%_0.088_100.17)] mx-8 my-4 rounded-lg shadow-xl flex flex-col items-center '>
            <img className='h-48 w-full flex flex-col items-center rounded-lg justify-center' src={props.source} alt="" />
            <h3 className='text-black font-sans text-xl font-semibold text-center'>{props.title}</h3>
            <p className='text-black font-sans text-lg font-normal text-center'>{props.amount}</p>
            <p className='text-black font-sans text-lg font-normal text-center'>{props.time}</p>
        </div>
    );
}

export default Card;