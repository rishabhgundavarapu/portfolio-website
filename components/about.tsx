"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated from UW-Madison in{" "}
        <span className="font-medium">in May 2023.</span>
         My core stack
        is{" "}
        <span className="font-medium">
          Python, R, SQL, Tableau for Data Analysis and sklearn, Tensorflow, PyTorch for Machine Learning.
        </span>
        . I am also familiar with data engineering tools such Apache Spark, Snowflake, Apache Kafka, Mage AI . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a data analyst or a data engineer or as an junior data scientist.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, playing badminton, and watching F1. I also love{" "}
        <span className="font-medium">chocolate</span> and can finish any pint-sized chocolate ice cream in a <span className="font-medium">single</span> sitting.
      </p>
    </motion.section>
  );
}
