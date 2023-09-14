import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = useState("");

    const getMemeImage = () => {
        const Memes = memesData.data.memes;
        const randomMemeItem = Memes[Math.floor(Math.random() * Memes.length)];
        setMemeImage(randomMemeItem.url.toString());
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button className="form--button" onClick={getMemeImage}>Get your Meme!</button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}