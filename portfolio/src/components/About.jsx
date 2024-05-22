import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                        </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000] w-full grid  sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi. I'm Vanamali Sims, nice to meet you. please take a look around</p>
                    </div>
                    <div>

                        <p>I am a versatile developer specializing in machine learning, front-end web development, and software development with Python and TypeScript. With strong communication and problem-solving skills, I excel at creating innovative, user-friendly solutions. Let's work together to bring your ideas to life.</p>
                    </div>
                </div>
            
        </div></div>
  )
}

export default About
