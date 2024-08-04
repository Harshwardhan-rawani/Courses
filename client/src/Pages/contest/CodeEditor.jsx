import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import "./Style.css"
const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here\n;');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const runCode = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/execute`, { code, language });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(error.response.data.error);
    }
  };

  return (
    <div >
        <div className='flex w-full justify-end px-10'>
        <select className='text-black focus:ring-0 focus:outline-none border-black rounded-md' value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
      </select>
      </div>
<br />
      <Editor 
      className='border-2 rounded-md'
        height="60vh"
        language={language}
        defaultValue={code}
        onChange={handleEditorChange}
        options={{
          scrollbar: {
            vertical: 'auto',
            horizontal: 'auto',
            useShadows: false,
            verticalScrollbarSize: 12,
            horizontalScrollbarSize: 12,
            verticalSliderSize: 12,
            horizontalSliderSize: 12,
          },
        }}
      />
      <br />
      <button className='text-white font-bold p-2 bg-green-400 mb-2' onClick={runCode}>Run</button>
      <div className='text-black mb-2'>Output</div>
      <pre className='text-black border-2 p-5 mb-10' >{output}</pre>
    </div>
  );
};

export default CodeEditor;
