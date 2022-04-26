import React from 'react'
import Header from './Header'
import NotesList from './NotesList'

const NotesArea = () => {
    return (
        <div className='flex-1'>
            <Header />
            <NotesList />
        </div>
    )
}

export default NotesArea