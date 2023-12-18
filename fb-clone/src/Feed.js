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
      message = 'Wow This works'
      timestamp = 'This is a timestamp'
      username = 'x.akshit'
      image = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8fDA%3D'
    />
    <Post />
    <Post />
    </div>
  )
}

export default Feed  