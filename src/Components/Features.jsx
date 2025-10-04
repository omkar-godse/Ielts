import React from 'react'
import TiltedCard from './TiltedCard';

const Features = () => {
  return (
    <div className='m-5 p-6 flex flex-wrap gap-8'>

        <div className='relative p-6 border w-screen text-2xl bg-base-100 '>Our Services

        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>           
        </div>

        <div className='relative p-6 border'>
            <TiltedCard

            imageSrc="src/assets/Speaking.jpg"

            containerHeight="200px"

            containerWidth="200px"

            imageHeight="200px"

            imageWidth="200px"

            rotateAmplitude={12}

            scaleOnHover={1.2}

            showMobileWarning={false}

            />

            <span className='m-2 p-2 text-lg '> Speaking Practice</span>

        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>

        <div className='relative p-6 border'>
            <TiltedCard

            imageSrc="src/assets/Mock.jpg"

            containerHeight="200px"

            containerWidth="200px"

            imageHeight="200px"

            imageWidth="200px"

            rotateAmplitude={12}

            scaleOnHover={1.2}

            showMobileWarning={false}
          />

            <span className='m-2 p-2 text-lg text-center '> Mock Tests</span>

        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
  
        </div>

        <div className='relative p-6 border items-center'>
            <TiltedCard

            imageSrc="src/assets/Score.jpg"

            containerHeight="200px"

            containerWidth="200px"

            imageHeight="200px"

            imageWidth="200px"

            rotateAmplitude={12}

            scaleOnHover={1.2}

            showMobileWarning={false}

          />

            <span className='m-2 p-2 text-lg text-center '> AI Band Score</span>

        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>

        <div className='relative p-6 border items-center'>
            <TiltedCard

            imageSrc="src/assets/Teaching.avif"

            containerHeight="200px"

            containerWidth="200px"

            imageHeight="200px"

            imageWidth="200px"

            rotateAmplitude={12}

            scaleOnHover={1.2}

            showMobileWarning={false}

          />

            <span className='m-2 p-2 text-lg text-center '>One on One Coaching</span>

        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
        
        <div className='relative p-6 border items-center'>
            <TiltedCard

            imageSrc="src/assets/Timings.jpg"

            containerHeight="200px"

            containerWidth="200px"

            imageHeight="200px"

            imageWidth="200px"

            rotateAmplitude={12}

            scaleOnHover={1.2}

            showMobileWarning={false}
          />

            <span className='m-2 p-2 text-lg text-center '> Flexible Timings</span>

        <span className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
    </div>


  )
}

export default Features
