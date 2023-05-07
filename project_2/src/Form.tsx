import { useState } from "react";
import memesData from "./memesData";

export default function Form() {
  const [memeImage, setMemeImage] = useState("");
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[randomNumber].url;
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <>
      <main>
        <div className="form">
          <input
            type="text"
            placeholder="Top Text"
            className="form-inputs"
          ></input>
          <input
            type="text"
            placeholder="Bottom Text"
            className="form-inputs"
          ></input>
          <button className="btn-meme" onClick={getMemeImage}>
            Get a new meme image🤳
          </button>
        </div>

        <div className="image">
          <img src={memeImage} alt="photo" />
          <img src={memeImage} alt="photo" />
          <img src={memeImage} alt="photo" />
        </div>
      </main>
    </>
  );
}
