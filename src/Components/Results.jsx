import React from 'react'
import InfiniteScroll from './InfiniteLoop';
import { div } from 'motion/react-client';


const items = [

  { content: <p><h3>Sahil</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Sakshi</h3><br/>Band: 7.0</p> },

  { content: <p><h3>Anjusree</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Shreya</h3><br/>Band: 8.0</p>},

  { content: <p><h3>Vidhi</h3><br/>Band: 7.5</p> },

  { content: <p><h3>Sanjay</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Meghdeep</h3><br/>Band: 7.0</p> },

  { content: <p><h3>Apoorva</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Payel</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Suhana</h3><br/>Band: 6.5</p> },
];

const items1 = [

  { content: <p><h3>Suman</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Ankush</h3><br/>Band: 7.0</p> },

  { content: <p><h3>Riya</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Akshay</h3><br/>Band: 8.0</p>},

  { content: <p><h3>Kriyal</h3><br/>Band: 7.5</p> },

  { content: <p><h3>Suraj</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Harsh</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Piyush</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Mohammad</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Ankit</h3><br/>Band: 6.5</p> },
];

const items2 = [

  { content: <p><h3>Prafull</h3><br/>Band: 7.5</p> },

  { content: <p><h3>Kritika</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Pranav</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Pratiksha</h3><br/>Band: 8.0</p>},

  { content: <p><h3>Chaitanya</h3><br/>Band: 7.5</p> },

  { content: <p><h3>Chirag</h3><br/>Band: 7.5</p> },

  { content: <p><h3>Prince</h3><br/>Band: 7.0</p> },

  { content: <p><h3>Zoro</h3><br/>Band: 6.5</p> },

  { content: <p><h3>Rohit</h3><br/>Band: 8.0</p> },

  { content: <p><h3>Omkar</h3><br/>Band: 7.5</p> },
];

const Results = () => {
  return (
    <div className='m-4 p-4 border'>
        <div className='m-4 p-4 text-8xl text-center'>1000+ 8 Band Results</div>
        <div className='m-2 p-2 text-2xl text-center'>We've helped 1.5 lakh students achieve their study abroad and Canada PR goals</div>
    <div className=" m-4 p-4 min-h-1/2 grid grid-flow-col sm:grid-flow-rowgrid-cols-3 sm:grid-cols-1  rounded-lg bg-base-200">
        <div  style={{height: '500px', position: 'relative'}}>

        <InfiniteScroll

            items={items}

            isTilted={false}

            tiltDirection='left'

            autoplay={true}

            autoplaySpeed={0.5}

            autoplayDirection="down"

            pauseOnHover={true}

        />

        </div>

        <div style={{height: '500px', position: 'relative'}}>

        <InfiniteScroll

            items={items1}

            isTilted={false}

            tiltDirection='left'

            autoplay={true}

            autoplaySpeed={0.5}

            autoplayDirection="up"

            pauseOnHover={true}

        />
        </div>

        <div style={{height: '500px', position: 'relative'}}>

        <InfiniteScroll

            items={items2}

            isTilted={false}

            tiltDirection='left'

            autoplay={true}

            autoplaySpeed={0.5}

            autoplayDirection="down"

            pauseOnHover={true}

        />

        </div>
    </div>
    </div>
  )
}

export default Results
