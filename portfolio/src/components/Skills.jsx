import React from 'react'
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png'
import Aws from "../assets/aws.png";
import scikit from "../assets/scikitlearn.png";
import Typescript from '../assets/tssvg.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 ' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>//These are the technologies I have worked with </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
            <p className='my-4'>Python</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
            <p className='my-4'>GitHub</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
            <p className='my-4'>Tailwind</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>React</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={Aws} alt="HTML icon" />
            <p className='my-4'>Amazon Web Services</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
            <p className='my-4'>JavaScript</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto mt-8' src={scikit} alt="HTML icon" />
            <p className='my-4'>ScikitLearn</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' >
            <img className='w-20 mx-auto' src={Typescript} alt="HTML icon" />
            <p className='my-4'>TypeScript</p>
        </div>
     
      </div>
    </div>
    </div>
  )
}

export default Skills
