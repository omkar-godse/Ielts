import React from 'react'
import TextType from './TextType' 


const Hero = () => {
  return (
    <div>
      <div className=" relative hero bg-base-200 min-h-[8/10] w-auto border m-4">
        <div className="hero-content flex flex-wrap">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <TextType 
                text={["Your IELTS Success is Our Mission","Live Your Foreign Study Dream","Achieve Band 8 with IELTS Tutor"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="..."
                textColors={['#000000', '#ff0000', '#0000ff']}
              />
            </h1>
            <p className="py-6 ">
                Prepare Smarter, Score Higher with IELTS Tutor
            </p>
            <button className="btn btn-primary">Start IELTS Preparation</button>
            </div>
            <div className="max-w-md p-6 text-right"><img src="src\assets\Image1.jpg" alt="Study Abroad " /></div>
        </div>
        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  )
}

export default Hero
