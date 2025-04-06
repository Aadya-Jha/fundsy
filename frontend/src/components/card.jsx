import React from 'react'

const Card = (props) => {
    return(
        <div className={`h-80 w-64  mx-8 my-4 rounded-lg flex flex-col items-center shadow-2xl hover:scale-105 hover:cursor-pointer
         ${props.className}`}
        >
            <img className='h-48 w-full flex flex-col items-center rounded-lg justify-center shadow-lg ' src={props.source} alt="" />
            <h3 className='text-black font-sans text-xl font-semibold text-center'>{props.title}</h3>
            <p className='text-black font-sans text-lg font-normal text-center'>{props.amount}</p>
            <p className='text-black font-sans text-lg font-normal text-center'>{props.time}</p>
        </div>
    );
}

export default Card;