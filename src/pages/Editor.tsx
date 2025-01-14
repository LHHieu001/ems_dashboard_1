import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import { Editor } from 'primereact/editor';


const Editors = () => {

    const [text, setText] = useState('This is Editor')

  return (
    <div className='m-3 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header 
            title="Editor"
            category="App"
        />
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue || '')} style={{ height: '320px' }} />
    </div>
  )
}

export default Editors