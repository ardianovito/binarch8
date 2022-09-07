import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";

export default function (){
    const inputStyle = `px-3 my-3 rounded text-base text-yellow-500  py-1.5 w-9/12 bg-white bg-clip-padding border-solid border-gray-300 roundedtransition ease-in-out m-0 focus:text-gray-700   focus:outline-none focus:border-2
    `
    const buttonStyle= `"inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"`


    return(
        <div className="flex justify-center items-center bg-white-100 h-screen w-screen text-white">
        <div className="w-9/12 h-4/5 shadow-lg shadow-teal-900 bg-yellow-700 flex flex-col items-center py-4 text-lg font-bold">
            <span>Search Player</span>
            <div className='flex flex-wrap'>
                <input type="text" placeholder="By Username" name="username" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                <input type="text" placeholder="By Email" name="email" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                <select className={inputStyle} name="lvl" onChange={(e)=>{on(e)}}>
                    <option>Select lvl ...</option>
                </select>
                <button 
                        className={buttonStyle}
                        onClick={(e)=>{onSubmitHandle(e)}}
                        >
                        Search
                </button>
            </div>
        </div>
        </div>
)
    }