import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <p className="text-2xl font-lighter m-8 mx-32">{props.heading}</p>
      <textarea
        className="textarea mx-32 w-[80vh] h-[40vh]"
        placeholder="Type Here"
        onChange={handleOnChange}
        value={text}
      ></textarea>
      <div className="mx-32 my-4 flex">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container mx-32">
        <p className="text-2xl font-bold my-8">Your Text Summary</p>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        {/* <p>{0.008 * text.split(" ").length} minutes to read allat</p> */}
        <p className="text-2xl font-bold my-8">Preview</p>
        <p>{text}</p>
      </div>
    </>
  );
}
