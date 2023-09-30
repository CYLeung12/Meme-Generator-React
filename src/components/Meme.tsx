import React, { ChangeEvent, useState } from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
        setMeme(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

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
                <input type="text" className="form--input" placeholder="Top Text" onChange={handleChange} name="topText" />
                <input type="text" className="form--input" placeholder="Bottom Text" onChange={handleChange} name="bottomText" />
                <button className="form--button" onClick={getMemeImage}>Get your Meme!</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}