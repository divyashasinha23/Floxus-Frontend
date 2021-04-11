import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import { FcGoogle } from 'react-icons/fc';

const CourseData = {
  title: 'Linux and Cybersecurity Workshop',
  courseHerodata: [
    '3 days live workshop.',
    'Get certified by Microsoft.',
    'Become a part of Floxus Community',
  ],
  status: 'Inprogress',
  price: 'FREE',
  courseServices: ['3 Days', '3+', 'Community'],
  courseObjectives: [
    'Learn about Linux distributions',
    'Learn about hacking tools and networking',
    'Learn how to find security vulnerability',
    'Learn how to do bug bounty.',
  ],
  Topics: [
    'Linux',
    'Terminal',
    'Networking',
    'API Pentesting',
    'Web Application Pentesting',
    'Securtiy',
    'Bug Bounty',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
  ],
};

const CyberSecurityEvent = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        active="inprogress"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/cyberHero.jpg"
        status={CourseData.status}
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={<FcGoogle fontSize="45px" />}
        description=" Learn by Google Hall of Fame"
        linkto="https://discord.gg/nyZnWRM7z8"
        btnText="Enroll Now"
      />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default CyberSecurityEvent;
