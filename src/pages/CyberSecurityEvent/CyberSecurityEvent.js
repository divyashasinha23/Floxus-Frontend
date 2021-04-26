import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import { MdAccountBalance } from 'react-icons/md';

const CourseData = {
  title: 'Linux and Cybersecurity Workshop',
  courseHerodata: [
    '3 days live workshop.',
    'Get certified.',
    'Become a part of Floxus Community',
  ],
  status: 'finished',
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
        active="true"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/cyberHero.jpg"
        status={CourseData.status}
        watchlist="https://www.youtube.com/watch?v=w0ZKuyOyt50&list=PLJOROP7Jw1kpCWzslEeISHiQhsRqkLZ3Q"
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={<MdAccountBalance fontSize="45px" color="#050b75" />}
        description=" Access all the learning and project materials from floxus community."
        linkto="https://discord.gg/nyZnWRM7z8"
        btnText=" Join the Community"
      />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default CyberSecurityEvent;
