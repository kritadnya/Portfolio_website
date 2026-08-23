import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        Things I've built
      </h4>
      <h2 className='text-center  text-5xl font-ovo'>
        My Projects
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I am passionate about technology and love building fun projects. My interests range from Machine Learning, Natural Language Processing, Operating Systems to full stack development!
      </p>
        <div className='grid grid-cols-auto gap-6 my-10 '>
            {serviceData.map(({icon,title,description,link},index)=>(
                <div key={index} className='border-[0.5px] border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700'>
                        {title}
                    </h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5' >
                        Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                    </a>

                </div>
            ))}
        </div>


    </div>
  )
}

export default Projects
