import { Button, Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from "./firebase"

function TweetBox() {

    const [ tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage ] = useState('')
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "anonymous",
            username: "anonymous",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.pinimg.com/736x/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg"
        })
        setTweetMessage('')
        setTweetImage("")
    }
    return (
        <div className="tweetbox">
            <form>
                <div className="input">
                <Avatar />
                <input onChange={(j) => setTweetMessage(j.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
                <input onChange={j => setTweetImage(j.target.value)} placeholder="Enter image URL" type="text"/>
                </div>
                <Button onClick={sendTweet} type="submit" className="btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
