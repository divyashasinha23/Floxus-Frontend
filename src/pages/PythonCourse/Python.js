import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import SyllabusCourse from '../../components/SyllabusCourse/SyllabusCourse';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';

const PythonCourseData = {
  title: 'Python Power Programming',
  courseHerodata: [
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
  ],
  price: 3000,
  courseServices: ['48+ hours', '3+', '24/7'],
  courseObjectives: [
    'Install Python and write your first program',
    'Describe the basics of the Python programming language',
    'Use variables to store, retrieve and calculate information',
    'Use variables to store, retrieve and calculate information',
  ],
  Topics: [
    'Python Programming',
    'Computer Programming',
    'SQL',
    'Object Oriented Programming',
  ],
  prerequisite: [],
  curriculum: [
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
  ],
};

const Python = () => {
  return (
    <>
      <Toolbar />
      <Coursehero courseData={PythonCourseData} />
      <CourseOverview
        courseObjectives={PythonCourseData.courseObjectives}
        topics={PythonCourseData.Topics}
        prerequisite={PythonCourseData.prerequisite}
      />
      <SyllabusCourse curriculum={PythonCourseData.curriculum} />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Python;
