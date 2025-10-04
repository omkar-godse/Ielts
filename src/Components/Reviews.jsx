import React from 'react'

const Reviews = () => {
  return (
    <div className='m-auto p-4 flex flex-wrap gap-10 justify-center min-w-screen '>

        <div className='text-5xl font-bold min-w-screen m-4 p-4 text-center'>Testimonials</div>

      <div className="card border w-96 bg-base-100 card-lg shadow-sm">
        <div className="card-body">
            <h2 className="card-title">Suhana</h2>
            <p>My first IELTS exam was so dissapointing. At the time I didn't have any idea about IELTS Tutor. IELTS Tutor really helped me with structures. I didn't know I needed a particular plan. In that way it was really helpful. I wouldn't be able to get the score without your assistance.</p>
            <div className="justify-end card-actions">
            <button className="btn btn-primary">Band : 8</button>
            </div>
        </div>
      </div>

      <div className="card border w-96 bg-base-100 card-lg shadow-sm">
        <div className="card-body">
            <h2 className="card-title">Ankit</h2>
            <p>IELTS Tutor is hands down the best online prep material out there. It has the complete package. Thanks a ton to the wonderful IELTS Tutor Team</p>
            <div className="justify-end card-actions">
            <button className="btn btn-primary">Band : 7.5</button>
            </div>
        </div>
      </div>

      <div className="card border w-96 bg-base-100 card-lg shadow-sm">
        <div className="card-body">
            <h2 className="card-title">Zoro</h2>
            <p>

Broadly speaking, IELTS Tutor guided me to master the skills required for IELTS and how to prepare for it. Predominantly, I enjoyed all the sessions. All in all, I thank IELTS Tutor for the motivation and guidance</p>
            <div className="justify-end card-actions">
            <button className="btn btn-primary">Band : 7</button>
            </div>
        </div>
      </div>

    </div>
)

}

export default Reviews
