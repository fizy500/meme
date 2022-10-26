import React from "react";
import memeData from "./memeData";
import { useState } from "react";
export default function Body() {
  const [memeImage, setMemeImage] = useState("");
  function getmemeimage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main className="space-y-6 py-40 px-5 w-full flex flex-col justify-center items-center ">
      <div className="space-y-6">
        <div className="grid grid-cols-2 justify-center items-center space-x-5">
          <input
            type="text"
            placeholder="top text"
            className="py-2 px-5 rounded-md border-solid border-2   border-[#D5D4D8]"
          />
          <input
            type="text"
            placeholder="bottom text"
            className="py-2 px-5 rounded-md  border-solid border-2   border-[#D5D4D8]"
          />
        </div>
        <button
          className="bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-bold  text-base px-10 py-3 w-full rounded-md border-none active:bg-[#A626D3]"
          onClick={getmemeimage}
        >
          Get a new meme image🖼
        </button>
      </div>
      <img src={memeImage} alt="" className="rounded-[2px] max-w-[96%]  h-full shadow-md" />
      <a href="" download={memeImage}>
        Download
      </a>
    </main>
  );
}
