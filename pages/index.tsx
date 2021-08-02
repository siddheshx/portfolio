import { motion } from 'framer-motion';
import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { fadeInUp, routeAnimation, stagger } from '../animations';

import Head from 'next/head';

const index = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>
          Sid B | About
        </title>
      </Head>
      <div className="my-3 text-base font-medium">
        Dedicated and efficient full stack developer with with 3+ years of experience building applications with a variety of tools, languages, and frameworks. Excels in learning new technologies and applying them to develop clean and well-structured code. Experienced at working on projects at all stages of the Software Development Life Cycle (SDLC) from idea to
        development to delivering the completed product.
      </div>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <div className="my-3 text-xl font-semibold tracking-wide">
          My capabalities 
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index