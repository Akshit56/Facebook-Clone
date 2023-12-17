import React from 'react'
import "./Feed.css"; 
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className='feed'>
    <StoryReel />
    <MessageSender />
    <Post 
      profilePic= "https://avatars.githubusercontent.com/u/92316352?s=400&u=bfe5bef0337f1f95dd9e94dfa2fec5be65407114&v=4"
      message={message}
      timestamp={timestamp}
      username={username}
      image={image}
    />
    <Post />
    <Post />
    </div>
  )
}

export default Feed  