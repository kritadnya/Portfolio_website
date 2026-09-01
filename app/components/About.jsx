import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import DailyRoutine from './DailyRoutine'
import Skills from './Skills'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      <h4 className='text-center mb-2 text-xl font-ovo'>
        Introduction
      </h4>

      <h2 className='text-center text-5xl font-ovo text-light-black'>
        About me </h2>
      <p className='text-center text-xl max-w-2xl mx-auto mt-5  font-ovo'>
        More about me & what i do
      </p>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.about_me} alt='user' className='w-full rounded-3xl'/>
          </div>
          <div className='flex-1 font-ovo text-black'>
            <p className='mb-10 max-w-2xl font-ovo text-black text-xl text-justify'>
              I’m a software developer at HPE, with 2 years of experience in fullstack development. <br /> 
              My day to day work looks like - building fullstack tools & dashboards, debugging and writing automation scripts for Junos routers used in client networks - Amazon and Google. <br /> 
              I am skilled in Java, Python, FastAPI, Node.js, Express, React.js, Next.js and Javascript. <br />

              I am a trained Bharatanatyam with 18 years of experience and a life long artist. I love everything about computers, mathematics and physics. <br />

              Fun fact about me? I am fluent in 6 different languages - English, Hindi, Marathi, Kannada, French and German!

              
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
              {infoList.map(({icon,iconDark, title, description}, index)=>(
                <li className='border-[0.5px] border-infolist rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black bg-light' key={index}>
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700' >{title}</h3>
                  <p className='text-black text-sm'>{description}</p>
                </li>
              ))}
            </ul>

              <h4 className='my-6 text-bold font-ovo text-lg text-black'>Tools I use at work:</h4>
              <ul className='flex items-center gap-3 sm:gap-5 '>
                {/* {toolsData.map((tool,index)=>(
                  <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ' key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                  </li>
                ))} */}
                {toolsData.map((tool, index) => (
                    <li
                    key={index}
                    className="relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-tools rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-light hover:shadow-pink"
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      className="w-5 sm:w-7"
                    />

                    <span
                      className="
                        absolute
                        -top-10
                        left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-md
                        bg-black
                        px-3
                        py-1.5
                        text-xs
                        text-white
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-200
                        pointer-events-none
                        z-20
                      "
                    >
                      {tool.name}
                    </span>
                  </li>
))}
              </ul>

          </div>

        </div>

        <DailyRoutine />

        <Skills />
      
    </div>
  )
}

export default About
