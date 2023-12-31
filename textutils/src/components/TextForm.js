import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "Success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "Success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "Success");
  };
  const handleCapital = () => {
    let newText = text.toLowerCase();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText);
    props.showAlert("Capitalized the Sentence!", "Success");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "Success");
  };
  const handleRevT = () => {
    const newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("String Reversed!", "Success");
  };
  const handleRevW = () => {
    const words = text.split(/\s+/);
    const reversedText = words
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
    setText(reversedText);
    props.showAlert("Words Reversed!", "Success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "Success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const wordChecker = (word) => {
    const wordCount = word
      .split(/\s+/)
      .filter((item) => item.length > 0).length;
    return `${wordCount} words and ${word.length} characters`;
  };

  return (
    <>
      <p className="text-2xl font-lighter m-8 mx-32">{props.heading}</p>
      <textarea
        className="textarea mx-32 w-[80%] h-[40vh]"
        placeholder="Type Here"
        onChange={handleOnChange}
        value={text}
        id="mybox"
      ></textarea>
      <div className="mx-32 my-4 flex">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleCapital}
        >
          Capitalize
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleRevT}
        >
          Reverse Text
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleRevW}
        >
          Reverse Words
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container mx-32">
        <p className="text-2xl font-bold my-8 mx-1">Your Text Summary</p>
        <p>{wordChecker(text)}</p>
        {/* <p>{0.008 * text.split(" ").length} minutes to read allat</p> */}
        <p className="text-2xl font-bold my-8">Preview</p>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
