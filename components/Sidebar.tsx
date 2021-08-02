import React, { useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        setTheme("dark");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Image
                src="/images/sid_bgk.jpeg"
                alt="Siddhesh Bgk"
                className="mx-auto rounded-full"
                height="128px"
                width="128px"
                quality="100"
            />
            <h3
                className="my-4 text-3xl font-bold tracking-wider font-roboto"
            >
                <span className="text-green">Siddhesh </span>
                B
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Full Stack Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href="/assets/Resume.pdf" download="siddhesh_bgk_2021">
                <GiTie className="w-6 h-6" /> Download Resume
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="https://www.linkedin.com/in/siddhesh-bhogaonkar-a15728172" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Mumbai, India</span>
                </div>
                <p className="my-2">sid.bgk@gmail.com</p>
                <p className="my-2">8149991128</p>
            </div>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open("mailto:sid.bgk@gmail.com")}
            >Email me</button>
            <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>
        </div>
    )
}

export default Sidebar
