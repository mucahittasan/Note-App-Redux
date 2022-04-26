import { useState } from "react";
import { addNote } from '../redux/notes/noteSlice';
import { useDispatch } from 'react-redux'
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [color, setColor] = useState('');

  console.log(color);

  const handleClick = (e) => {
    e.preventDefault();
    if (note === '') {
      alert('You must add a title!');
    } else if (title === '') {
      alert('You must add a note!');
    } else if (color === '') {
      alert('You must check a color!');
    } else {
      dispatch(addNote({ id: nanoid(), title, note, color }));
      setTitle('');
      setNote('');
    }
  };

  const changeColor = (e) => {
    setColor(e.target.dataset.color);
  };


  return (
    <form className="flex flex-col p-3">
      <input
        className="mb-5 h-10 pl-3 placeholder:text-gray-500 outline-none rounded"
        type="text"
        placeholder="Add your title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-2 h-32 placeholder:text-gray-500 outline-none rounded"
        placeholder="Write some note.."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <div className="mt-4">
        <input
          onClick={(e) => changeColor(e)}
          data-color="bg-red-300"
          className="w-7 h-7 cursor-pointer rounded-full bg-red-300"></input>

        <input
          onClick={(e) => changeColor(e)}
          data-color="bg-green-300"
          className="w-7 h-7 cursor-pointer rounded-full ml-3 bg-green-300"></input>

        <input
          onClick={(e) => changeColor(e)}
          data-color="bg-blue-300"
          className="w-7 h-7 cursor-pointer rounded-full ml-3 bg-blue-300"></input>

        <input
          onClick={(e) => changeColor(e)}
          data-color="bg-purple-300"
          className="w-7 h-7 cursor-pointer rounded-full ml-3 bg-purple-300"></input>

        <input
          onClick={(e) => changeColor(e)}
          data-color="bg-gray-300"
          className="w-7 h-7 cursor-pointer rounded-full ml-3 bg-gray-300"></input>
      </div>

      <button onClick={(e) => handleClick(e)} className="h-8 text-center mt-4 rounded hover:bg-gray-500 transition-colors bg-gray-700 text-white w-28">
        Add note
      </button>
    </form>
  );
};

export default Form;
