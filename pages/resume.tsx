import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { fadeInUp, routeAnimation } from '../animations';

import { motion } from 'framer-motion';
import Head from 'next/head';

const resume = () => {

    return (
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit" className="px-6 py-2">
            <Head>
                <title>
                    Sid B | Resume
                </title>
            </Head>
            <div className="grid gap-6 xl:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate" className="resume_grid">

                    <div>
                        <h5 className="my-3 text-2xl font-bold">Languages and frameworks</h5>
                        <div className="pr-2 my-2">
                            {
                                languages.map(language => <Bar data={language} key={language.name} />)
                            }

                        </div>
                    </div>
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Tools and software</h5>
                        <div className="pr-2 my-2">
                            {
                                tools.map(tool => <Bar data={tool} key={tool.name} />)
                            }

                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate" className="resume_grid">

                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">PROJECT MANAGER</h5>
                        <p className="font-semibold">IAUDITED <span className="text-sm font-light">(May 2019 - Present)</span></p>
                        <p className="my-3">iAudited is a Layered Process Audit (LPA) software, a tool
                            for the consistent implementation of process standards to
                            improve product quality. As project manager my
                            responsibilities was planning, procurement and execution
                            of new Features.</p>
                        <h3 className="font-semibold">Major accomplishments:</h3>
                        <ul className="list-outside">
                            <li>
                                Developed full-stack web application which
                                processed, analyzed, and rendered data visually
                            </li>
                            <li>
                                Managed time-sensitive updates, including
                                content changes and database upgrades.
                            </li>
                            <li>
                                Planned, wrote, and debugged application
                                features with complete accuracy.
                            </li>
                            <li>
                                Successfully integrate Azure Active Directory, to
                                implement Single Sign-On feature.
                            </li>
                            <li>
                                90% of features were completed ahead of
                                schedule.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h5 className="my-2 text-xl font-bold">FULL STACK DEVELOPER</h5>
                        <p className="font-semibold">SPRYOX <span className="text-sm font-light">(Feb. 2018 - May 2019)</span></p>
                        <p className="my-3">SpryOX was a service based Website and Mobile app
                            development company. I joined as PHP developer. As my
                            HTML5 and CSS3 skills improved, I worked as full stack
                            developer.</p>
                        <h3 className="font-semibold">Major accomplishments:</h3>
                        <ul className="list-outside">
                            <li>Developed app integration with REST / SOAP and
                                other APIs for Google Maps, social media logins,
                                payment processors, and other services.
                            </li>
                            <li>Develop 10+ full-stack web applications to
                                analyze and process data for different clients
                            </li>
                            <li>Played a key role in the development,
                                improvement, and operation of web-based
                                software.
                            </li>
                            <li>Gained hands-on expertise in PHP, Laravel,
                                MySql, HTML, CSS, Javascirpt and exposure to
                                front end libraries such as JQuery and React.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h5 className="my-2 text-xl font-bold">ANDROID DEVELOPER</h5>
                        <p className="font-semibold">KICK TECH SMART <span className="text-sm font-light">(Jun. 2017 - Jan. 2018)</span></p>
                        <p className="my-3">Kick tech smart was moile application development
                            company. I started my developer journey from this
                            company as Android Developer.</p>
                        <h3 className="font-semibold">Major accomplishments:</h3>
                        <ul className="list-outside">
                            <li>Developed Developed Android Modules for
                                KickApp written in Java: Browser, Wifi File Transfer and Gallery
                            </li>
                            <li>Developed Messaging and Notification modules
                                for KickApp written in Nodejs using Firebase and
                                Google Cloud Services.
                            </li>
                            <li>Designed and Developed SpalonA Employee and
                                Customer app and wrote REST API for the same.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">BCA</h5>
                        <p className="font-light">Indira Gandhi National Open University (IGNOU)</p>
                    </div>
                    <hr />
                    <div>
                        <h5 className="my-2 text-xl font-bold">HSC</h5>
                        <p className="font-light">The Devine Image Collage</p>
                    </div>
                    <hr />
                    <div>
                        <h5 className="my-2 text-xl font-bold">SSC</h5>
                        <p className="font-light">PMM Inner Wheel School</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default resume
