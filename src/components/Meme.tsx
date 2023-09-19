import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);



    const getMemeImage = () => {
        const Memes = allMemeImages.data.memes;
        const randomMemeItem = Memes[Math.floor(Math.random() * Memes.length)];
        setMeme((prevState) => ({
            ...prevState,
            randomImage: randomMemeItem.url
        }));
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button className="form--button" onClick={getMemeImage}>Get your Meme!</button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}