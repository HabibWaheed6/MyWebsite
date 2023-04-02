import React from 'react'
import {FaTwitter, FaYoutube, FaInstagram, FaLinkedin,} from 'react-icons/fa'
import Section from '../common/Section';
import contact from "../assets//mobilering.png"

const Contact = () => {
    const SOCIAL = [
        {
            ID: 1,
            link: "https://twitter.com/Habz6Goat",
            icon:<FaTwitter />
        },

        {
            id: 2,
        link: "https://www.youtube.com/channel/UCN6z6HLTkG-9Fzadjjnuupg",
        icon:<FaYoutube />
        },
        {
            id: 3,
            link: "https://www.instagram.com/habibwaheed_/",
            icon:<FaInstagram />
        },
        {
            id: 4,
            link: "https://www.linkedin.com/in/habib-waheed-160849211/",
            icon:<FaLinkedin />
        },
       

    ];
  return  (
    <Section  title = "Contact📧" 
    subtitle="these are the different ways to get in touch. My email is Habibwaheed10@hotmail.co.uk and below
    is a form which you can fill out so I will get in touch.I hope to hear from you :)">
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div>
                <img src={contact} alt="contact info" className='w-62 h-62' />
                </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'></p>
            </div>
            <div className='flex w-full text-3xl itemts-center justify-evenly'>
                {SOCIAL.map(({id, link, icon})=>(
                    <a href={link} target="_blank" rel='noopener noreferrer' className='duration-300 ease-in-out hover:text-rose-500'>{icon}</a>
                ))}
            </div>
            <div className='flex items-center justify-center w-full p-8 text-left'>
                <form action='https://getform.io/f/4688f069-dc4e-40a1-8815-0026daf81f22' method='POST'>
                    <div className='w-full gap-4'></div>
                    <div className='flex-col felx'>
                        <label className='py-2 text-sm captalize font-extralight'>name</label>
                        <input type="text" 
                        name='name'
                         className='flex p-3 border-4 border-gray-400 rounded-lg focus:outline-none dark:bg-gray-900 dark:text-white'
                          />
                    </div>
                    <div className='flex-col my-2 felx '>
                        <label className='captalize text-smpy-2 font-extralight'>phone</label>
                        <input type="tel" 
                        name='phone'
                         className='flex p-3 border-4 border-gray-400 rounded-lg focus:outline-none dark:bg-gray-900 dark:text-white'
                          />
                    </div>
                    <div className='flex-col my-2 felx'>
                        <label className='captalize text-smpy-2 font-extralight'>email</label>
                        <input type="email" 
                        name='email'
                         className='flex p-3 border-4 border-gray-400 rounded-lg focus:outline-none dark:bg-gray-900 dark:text-white'
                          />
                    </div>
                    <div className='flex-col felx'>
                        <label className='py-2 text-sm captalize font-extralight'>message</label>
                        <textarea name='message' id='' rows="10"  className='flex p-6 border-4 border-gray-400 rounded-lg resize-none focus:outline-none dark:bg-gray-900 dark:text-white'
                        /> 
                        
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='px-6 py-3 my-8 tracking-wider text-white uppercase duration-200 rounded-md cursor-pointer bg-gradient-to-r from-rose-600 to-teal-400 hover:scale-105'
                          >
                            Send Message</button>
                    </div>
                </form>


            </div>
        </div>
    </Section>  
  )
}

export default Contact
