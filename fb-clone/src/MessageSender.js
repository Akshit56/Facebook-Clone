import React, { useState } from 'react'
import "./MessageSender.css";
import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./Firebase"
import firebase from 'firebase/compat/app';

function MessageSender() {
    const [{ user }, dispatch ] = useStateValue();
    const[input, setInput] = useState( '' );
    const[imageUrl, setImageUrl] = useState("");


    const handleSubmit = e => {
        e.preventDefault(); //prevents the page to refresh


        db.collection('posts').add ({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        // some clever db stuff  

        setInput("");
        setImageUrl("");

    }
    console.log(user.displayName)

  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar src={user.photoURL} />

            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value) }
                type = "text" className='messageSender__input'
                placeholder='Whats on your mind, ${user.displayName} ?' 
                />
                <input 
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder='Image URL (Optional)' />

                <button onClick={handleSubmit} type="submit" > 
                    Hidden Submit 
                </button> 

            </form>
        </div>
        <div className='messageSender__bottom'>
            <div className='messageSender__option'>
                <VideocamIcon style= {{ color: "red" }} />
                <h3>Live Video</h3>
            </div>

            <div className='messageSender__option'>
                <PhotoLibraryIcon style = {{ color: "green" }} />
                <h3>Photo/Video</h3>
            </div>
            <div className='messageSender__option'>
                <InsertEmoticonIcon style = {{ color: "orange" }} /> 
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender