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
                    Sid | portfolio | resume
                </title>
            </Head>
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">BCA</h5>
                        <p className="font-semibold">Amrita Universicy</p>
                        <p className="my-3">I am currently pursing B.tech in IT</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Developer</h5>
                        <p className="font-semibold">TSC</p>
                        <p className="my-3">Developer cool</p>
                    </div>
                </motion.div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages and frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name} />)
                        }

                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools and software</h5>
                    <div className="my-2">
                        {
                            tools.map(tool => <Bar data={tool} key={tool.name} />)
                        }

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
