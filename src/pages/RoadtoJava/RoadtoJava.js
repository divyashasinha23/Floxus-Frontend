import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import SyllabusCourse from '../../components/SyllabusCourse/SyllabusCourse';
import Footer from '../../components/Footer/Footer';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import { MdAccountBalance } from 'react-icons/md';

const CourseData = {
  title: 'The Road to Java',
  status: 'Inprogress',
  courseHerodata: [
    '7 days workshop.',
    'Get certified.',
    'Become a part of Floxus Community',
  ],
  price: 'FREE',
  courseServices: ['10+ hours', '3+', 'Community'],
  courseObjectives: [
    'Get accustomed to Java syntax.',
    'Hands-on writing and running code in java.',
    'Hands-on writing and running code in java',
  ],
  Topics: [
    'Java Programming',
    'Computer Programming',
    'Project Based',
    'Object Oriented Programming',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Language Overview',
      'About Java and its features',
      'Carrier path after learning JAVA',
    ],
    [
      'Language Fundamentals',
      'Identifiers, primitive data types,',
      'Conditionals',
      'Loops and for-each loop',
      'Method, parameters, and  return value',
      'JAVA coding standards',
    ],
    [
      'Object Oriented Programming',
      'Intro to Classes and objects',
      'Types of variables, access modifiers, fields, constructors',
      'Data hiding and encapsulation',
      'Inheritance',
      'Polymorphism',
      'Abstract classes and interfaces',
      'Aggregation and composition',
    ],
  ],
};

const RoadtoJava = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        linkto="https://airtable.com/shr70rIcGhV7aQBCt"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/javaroadthumb.jpg"
        status={CourseData.status}
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={
          <MdAccountBalance style={{ color: '#040A6E', fontSize: '40px' }} />
        }
        description="Batch starts from 28th July 2021"
        linkto="https://airtable.com/shr70rIcGhV7aQBCt"
        btnText="Enroll now"
      />
      <SyllabusCourse curriculum={CourseData.curriculum} />
      <CertificationSection image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/Python Bootcamp.png" />
      {/* <ProjectSection /> */}
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default RoadtoJava;
