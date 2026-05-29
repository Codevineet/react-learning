import React, { useState } from 'react'
import Card from './Components/Card.jsx';

const App = () => {

  let [notes, setNotes] = useState([]);
  let [heading, setHeading] = useState('');
  let [details, setDetails] = useState('');



  const handleForm = (e) => {
    e.preventDefault();
    let newNotes = {
      heading: heading,
      details: details
    }
    setNotes([...notes, newNotes]);
    setHeading('')
    setDetails('');
  }

  const deleteNote = (noteIdx) =>{
      const updatedNotes = notes.filter((note, idx) =>{
        return noteIdx !== idx;
      })

      setNotes(updatedNotes);
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form className='flex lg:w-1/2 flex-start p-10 flex-col gap-8' onSubmit={(e) => { handleForm(e) }}>
       <h1 className='text-2xl font-medium'>Add Notes</h1>
        <input type="text" placeholder='Enter Task Heading' className='px-5 py-2 border-2 rounded w-full' onChange={(e) => { setHeading(e.target.value) }} value={heading}/>
        <input type="text" placeholder='Enter Task..' className='px-5 py-2 border-2 rounded h-20 w-full' onChange={(e) => { setDetails(e.target.value) }} value={details}/>
        <button className='px-5 py-2 active:bg-black border rounded bg-white text-black w-full'>Add Notes</button>
      </form>

      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-2xl font-medium'>Your Notes</h1>
        <div className='flex flex-wrap justify-start items-start gap-5 mt-10 overflow-auto h-full'>
          {

            notes.map((note, idx) => {
              return <Card
                heading={note.heading}
                details={note.details}
                key={idx}
                deleteNote = {deleteNote}
                idx= {idx}
              />
            })}
        </div>

      </div>
    </div>
  )
}

export default App