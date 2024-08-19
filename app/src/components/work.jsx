import React from 'react';
import { motion } from "framer-motion"
import ubi from './images/ubi.svg';

const work = () => {
  return (
    <div classname="work">
        <h1>Work</h1>
        <h3>Here are some companies I would love to work for as a Web Devloper</h3>

        <div classname="ubisoft">
        <strong><h3>Ubisoft</h3></strong>
        <p>A popular game studio that is known for their famous IP's like Assassins Creed, Far Cry, Rainbow Six, etc.</p>
        <img src={ubi} alt="" />
        
        </div>

        <div classname="amazon">
          <strong><h3>Amazon</h3></strong>
          <p></p>
        </div>
    </div>
  )
}

export default work;
