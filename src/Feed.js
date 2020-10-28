import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from "./firebase"
import FLipMove from "react-flip-move"

function Feed() {

    const [posts, setPosts] = useState([])

        useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="feed">
            {/* Header */} 
            <div className="header">
            <h1>Home</h1>
            </div>
            {/* TweetBox */}
            <TweetBox />

            {/*post*/}
            <FLipMove>
            {posts.map(post => (
             <Post 
             displayName={post.displayName}
             username={post.username}
             verified={post.verified}
             text={post.text}
             avatar={post.avatar}
             image={post.image}
             />

            ))}
            </FLipMove>
            
        </div>
    )
}

export default Feed
