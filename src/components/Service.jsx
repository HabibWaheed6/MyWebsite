import React from 'react'
import Section from '../common/Section';
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import shopify from "../assets/shopify.png"


const Services = () => {

    const services = [
        {
            id:1,
            image: web,
            title: "Web development"
        },
        {
            
            id:2,
            image: mobile,
            title: "mobile development"
        },
        {
            
            id:3,
            image: shopify,
            title: "set up shopify store"
        }
    ]
  return <Section title="services👨‍💻" subtitle="All the services I provide are shown here.
   I hope I can provide your needs. However if I can't please get in touch as I might be able to help you">
 
   <div className='grid gap-10 lg:grid-cols-2'>
    {
        services.map(({id, image, title}) => (
            <div key={id} className="flex flex-col items-center justify-center duration-300 ease-in-out shadow-lg p5 dark:shadow-gray 100 rounded-xl hover:scale-300"> 
                <img src={image} alt= {title} className="w-36 h-36 md:w-44 md:h-44"/>
                <h3 className='mt-5 text-base'>{title}</h3>

            </div>
        ))
    }

   </div>
   </Section>
    
   
    
};

export default Services
