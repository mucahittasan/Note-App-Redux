import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeNote } from "../redux/notes/noteSlice";

const NotesList = () => {

  const dispatch = useDispatch();

  const items = useSelector((state) => state.notes.items);

  const deleteNote = (item) => {
    dispatch(removeNote(item));
  }

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ul className="grid grid-cols-4 gap-12 ">
        {items.map((item) => (
          <li key={item.id} className={`w-80 ${item.color} rounded h-64 max-h-full overflow-y-auto`}>
            <h3
              className={`text-xl sticky top-0 ${item.color} flex p-3 justify-between items-center border-b-2 border-b-gray-50 font-bold pb-2`}>
              {item.title}
              <button onClick={() => deleteNote(item)} className="w-5 h-5 flex items-center justify-center rounded-full bg-white">
                <i class="fa-solid fa-circle-xmark"></i>
              </button>
            </h3>
            <p className="p-3">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
