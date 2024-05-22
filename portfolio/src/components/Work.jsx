import React from 'react'
import WorkImg from '../projects/workImg.jpeg'
import TypImg from '../assets/typescriptproject.jpeg'
import DisasPred from '../assets/disaster.jpg'
import Doc from '../projects/doctor.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300 '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Some of my recent work</p>
        </div>


{/* Card */}
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
            <div style={{backgroundImage: `url(${TypImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effect */}
                
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            RSS Fetch-Parser
                        </span>
                        <div className='pt-8 text-center'>
                        
                            <a href="https://github.com/Vanamali-Sims/rss-FetchandParse">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${DisasPred})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effect */}
                
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Disaster Prediction
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href="https://github.com/Vanamali-Sims/Disaster-Pred-Info">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Doc})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effect */}
                
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Doctor Portal
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.drrvcancercare.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            
                            </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Work
