import React, { ChangeEvent, useState, useEffect } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
        width: ""
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
        setMeme(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const [allMemeImages, setAllMemeImages] = useState("");
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then((data) => setAllMemeImages(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomMemeItem: any = allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
        setMeme((prevState) => ({
            ...prevState,
            randomImage: randomMemeItem.url,
            width: randomMemeItem.width
        }));
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" onChange={handleChange} name="topText" />
                <input type="text" className="form--input" placeholder="Bottom Text" onChange={handleChange} name="bottomText" />
                <button className="form--button" onClick={getMemeImage}>Get your Meme!</button>
            </div>
            <div className="meme" style={{ inlineSize: meme.width }}>
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}