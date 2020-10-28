import { Avatar } from '@material-ui/core'
import React from 'react'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src={avatar} />
                </div>
                <div className="post-body">
                    <div className="post-header">
                        <div className="post-header-text">
                            <h3>
                                 {displayName}
                                <span className="post-span">
    {verified && <VerifiedUserIcon className="post-badge" />} @{username}
                                </span>
                            </h3>
                        </div>
                        <div className="description">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt=""/>
                    <div className="footer">
                     <ChatBubbleOutlineIcon fontSize="small" />
                     <RepeatIcon fontSize="small" />
                     <FavoriteBorderIcon fontSize="small" />
                     <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
