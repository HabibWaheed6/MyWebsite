import React from 'react'
import {FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaArrowDown} from 'react-icons/fa'
//import top from "../assets/top.png";
import black from "../assets/black2.png"

const Hero = () => {
    const SOCIAL = [
        {
            id: 1,
        link: "https://www.youtube.com/channel/UCN6z6HLTkG-9Fzadjjnuupg",
        icon:<FaYoutube />
        },
        {
            ID: 2,
            link: "https://twitter.com/Habz6Goat",
            icon:<FaTwitter />
        },
        {
            id: 3,
            link: "https://www.instagram.com/habibwaheed_",
            icon:<FaInstagram />
        },
       
        {
            id: 4,
            link: "https://www.linkedin.com/in/habib-waheed-160849211/",
            icon:<FaLinkedin />
        }

    ];
 
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if(this.scrolly >=90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");

    })


  return (
    <section className='flex flex-col items-center justify-start p-5 text-center min-h-screem'>
        <h2 className="text-5xl font-bold uppercase text-rose-600">Habib Waheed</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className="max-w-xl font-light text-gray-500">Welcome<span className='text-4xl animate-pulse'>👋</span>,
        Hello, my name is Habib Waheed and I am a recent graduate in software engineering. With a strong passion for software development and creating impactful applications, I have gained valuable experience through university studies and freelance work for various clients. My main expertise lies in web development and mobile development, and I am always striving to expand my skillset and knowledge in the field. I am committed to contributing to the growth and success of any organization I work with, and I welcome the opportunity to connect with you."

 </p>

        {/*social icons*/}
        <div className='flex w-full py-8 text-3xl justify-evenly lg:py-16 md:w-1/3'>
            {SOCIAL.map(({id, link, icon}) => (
                <a 
                href={link} 
                key = {id}
                target='_blank'
                rel='noopener noreferrer'
                className='duration-300 cursor-pointer hover:text-rose-600'
                >
                    {icon}</a>
            )
            )}
            </div>
           <div>
            <img 
            src={black} 
            alt="avatar"
             className='object-cover object-top pt-5 w-120 h-120 md:w-72 bg-gradient-to-b from-rose-400 rounded-xl'/>
            <a href="/Habib Waheed CV A.pdf"
             download={true} 
             className="flex items-center justify-center py-2 mt-10 text-white rounded-lg bg-gradient-to-r from-rose-400 to-teal-500">
                Resume
            </a>
           </div>

           {/*arrow down function*/}
           <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-gray-400-2xl animate-pulse'/>
           </div>
    </section>
  )
}

export default Hero
