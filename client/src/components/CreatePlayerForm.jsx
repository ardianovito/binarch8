import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";


export default function (){
    const inputStyle = `px-3 my-3 rounded text-base text-yellow-500  py-1.5 w-9/12 bg-white bg-clip-padding border-solid border-gray-300 roundedtransition ease-in-out m-0 focus:text-gray-700   focus:outline-none focus:border-2
    `
    const buttonStyle= `inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out`

    const [ valueForm , setValueForm ] = useState({}) 


    const onChangeHandle=(e)=>{  
        const {value,name} = e.target
        console.log(value,name)
        setValueForm({...valueForm, [name]:value})
    }

    const onSubmitHandle=(e)=>{
        e.preventDefault()
        console.log(valueForm)
        toast('Success Create Player', {
            duration: 4000,
            position: 'bottom',
            
            // Styling
            style: {backgroundColor:'yellow', color:'teal'},
            className: '',
    
        
            // Aria
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        });
    }
    
    return (
        <>
            <div className="flex justify-center items-center bg-white-100 h-screen w-screen text-white">
                <div className="w-3/12 h-2/5  bg-yellow-500 flex flex-col items-center py-4 text-lg font-bold">
                    <span>Create Player</span>
                    <input type="text" placeholder="username" name="username" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    <input type="text" placeholder="email" name="email" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    <input type="password" placeholder="password" name="password" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    <input type="text" placeholder="level" name="level 0-10" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    
                    <button 
                    className={buttonStyle}
                    onClick={(e)=>{onSubmitHandle(e)}}
                    >
                        SUBMIT
                    </button>

                    <Toaster />
                </div>
            </div>
        </>
    )
}
