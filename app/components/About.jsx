import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import DailyRoutine from './DailyRoutine'
import Skills from './Skills'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      <h4 className='text-center mb-2 text-lg font-ovo'>
        Introduction
      </h4>

      <h2 className='text-center text-5xl font-ovo text-light-black'>
        About me </h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.about_me} alt='user' className='w-full rounded-3xl'/>
          </div>
          <div className='flex-1 font-ovo text-black'>
            <p className='mb-10 max-w-2xl font-ovo text-black'>
              I’m a software developer with 2 years of experience in fullstack development and network automation. At Hewlett Packard Enterprise my day to day work looks like - building tools, fullstack dashboards, debugging and writing automation scripts for Juniper routers used in client networks such as Amazon and Google. <br /> 
              From building beautiful, user friendly websites to working behind the scenes on the backend, I enjoy turning ideas into meaningful experiences. I am skilled in Java, Python, FastAPI, Node.js, Express, React.js, Next.js and Javascript. <br />

              Beyond code, I’m a creative at heart. I love drawing, crochet, photography and have trained in Indian classical dance for 12 years. I’m curious, detail-oriented and always excited to learn, create and build something new. ✨ <br />

              I love everything about computers, mathematics and physics. I'm the biggest Snoopy fan I know. In my free time I go for a run, try new recipes and make fancy decorations for my room! 
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon,iconDark, title, description}, index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700' >{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </li>
              ))}
            </ul>

              <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>
              <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index)=>(
                  <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ' key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
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
