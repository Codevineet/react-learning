import React, { useState } from 'react'

const FormHandling = () => {

    let [name,setName] = useState('');
    const handleForm = (e) =>{
        e.preventDefault();
        console.log("Form submitted");
        console.log('name: ' , name);
        setName('');
    }


  return (
    <div >
        <form onSubmit={(e) =>{
            handleForm(e);
        }}>
        <input type="text" placeholder='Enter your name' className='p-3 border-2 m-4' value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <button className='px-5 py-1 m-4 rounded-2xl bg-blue-300'>Submit</button>
        </form>

    </div>
  )
}

export default FormHandling