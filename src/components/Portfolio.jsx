import React from 'react'
import Section from '../common/Section'
import { FaExternalLinkSquareAlt, FaGithub} from 'react-icons/fa'

import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"

const Portfolio = () => {
    
    const projects = [
        {
            id:1,
            image: p2,
            title: "Mad Mamba Run",
            link: "https://play.google.com/store/apps/details?id=com.hdesigngaming.madmambarun&pli=1",
            github:"https://github.com/HabibWaheed6/Mad-Mamba-Run",
        },
       {
        id:2,
        image: p3,
        title: "shopify store",
        link: "https://disxplne.com/",
        github: "https://disxplne.com/"
       } 
    ]



  return (<Section title="Portfolio ✍" subtitle="These are all the projects I have done so far to gain experience.
   There are more on the way, stay tunes 😁">
    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {projects.map(({id, image ,title,link, github}) => (
            <div key={id} className="flex max-w-lg overflow-hidden rounded shadow-gray-600 2xl"> 
                <img src= {image} alt={title} className="w-2/3" />
                <div className='flex flex-col items-center w-1/3 p-1 justify-evenly'>
                    <h2>{title}</h2> 
                    <a className='text-2xl duration-150 cursor-pointer hover:scale-110' href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a className = 'text-2xl duration-150 cursor-pointer hover:scale-110'href={link} target="_blank" rel="noopener noreferrer"><FaExternalLinkSquareAlt/></a>
                    </div>
            </div>

        ))}

    </div>

  </Section>
  )
}

export default Portfolio
