import React from 'react'
import './StoryReel.css'
import './Story.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'> 
        <Story 
            image="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/09/101_color_combinations_cover1.jpg?w=1250&h=1120&crop=1"
            profileSrc="https://cdni.iconscout.com/illustration/premium/thumb/man-3335553-2790260.png"
            title="Akshit"
        />
        
        <Story 
            image="https://freepixel-prod.s3.amazonaws.com/thumb/free-illustration-graphics-this-stock-photo-showcases-a-dynamic-display-of-swirling-vibrant-colors-in-the-form-of-a-circular-wa-th-10021970.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90bnSnjd6XP1r2kUfL8LGE3juJflG0yIN5w&usqp=CAU"
            title="Frankie"
        />
        
        <Story 
            image="https://pics.craiyon.com/2023-07-30/15331575c59e4dc1bac61d110517ced1.webp"
            profileSrc="https://clipart-library.com/images_k/man-silhouette-vector/man-silhouette-vector-22.jpg"
            title="Aryan"
        />
        
        <Story 
            image="https://static.vecteezy.com/system/resources/previews/026/430/317/large_2x/the-abstract-wallpaper-design-features-a-combination-of-vibrant-colours-and-futuristic-lines-that-create-a-visually-stunning-graphic-with-a-textured-light-background-with-ai-generative-photo.jpg"
            profileSrc="https://png.pngtree.com/element_pic/17/04/20/a8557236ad6130f70c458ce5a6b27ea1.png"
            title="Sam"
        /> 
        {/* Story */}  
        {/* Story */}
        {/* Story */}
        {/* Story */}

    </div>
  )
}

export default StoryReel