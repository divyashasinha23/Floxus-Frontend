import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import SyllabusCourse from '../../components/SyllabusCourse/SyllabusCourse';
import SyllabusCourseWorkshop from '../../components/SyllabusCourseWorkshop/SyllabusCourseWorkshop';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import { MdAccountBalance } from 'react-icons/md';

const CourseData = {
  title: 'Python Power Programming',
  status: 'Inprogress',
  courseHerodata: [
    '3 days live workshop.',
    'Get certified.',
    'Become a part of Floxus Community',
  ],
  price: 'FREE',
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
    'Project Based',
    'Object Oriented Programming',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Python Variables',
      'What is Python?, Interpreter, Compiler, Applications of Python, Installation of Python, Variables, Introduction of Class and Object.',
    ],
    [
      ' Python Operators',
      'Operators, Operands, Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Identity Operators, ,Membership Operators, Bitwise Operators.',
    ],
    [
      'Loops and Control Statements',
      'Loop Type, Decision Making, Conditional Statements, Control Statements',
    ],
    [
      'Strings and Numbers',
      'Strings, Operations on Strings, Numbers, Type Conversion',
    ],
    [
      'Sequences',
      'List, Operations on List, Tuple, Operations on Tuple, Dictionary, Operations on Dictionary, Set, Operations on Set.',
      'Mini Project',
    ],
    [
      'Functions',
      'Introduction, Arguments, Keyword Arguments, Default Parameter Value, Recursion, LGB Rule, Lambda, Pass by object reference, Pass by Object Value.',
    ],
    [
      'Classes and Objects',
      ' Object Oriented Programming, Class and Object, Public, Protected and Private Attributes, Advantage of using class in Python',
      ' self Parameter, Constructor and Destructor, __init__( ), Inheritance, Polymorphism, Overloading, Overriding, Encapsulation and Abstraction.',
    ],
    [
      'Modules and Packages',
      ' Module, Create a Module, Use a Module, Variables in Modules, Naming a Module, Built- in Module, dir( ), __name__, Package',
      'Creating a Python Package, Importing the Package, Namespaces, globals( ), locals( ), sys Modules, OS and SubProcess Module, Function of OS Module, Random.',
    ],
    [
      'Exceptions and Error Trapping',
      'What is an Error?, Syntax Error, Runtime Error, Exception Handling, Types of Exception Handling, Built-in Exceptions, Catching Exceptions in Python.',
      ' Catching Specific Exceptions in Python, Raising an Exception, Python Try with Else Clause, Python with Try with finally, Assertion Error, User-defined Exceptions.',
    ],
    [
      'File Handling',
      'Files, Paths, Types of File, Opening a File, File Object Attributes, Working of read( ) methods, write( ) methods, append( ) methods, split( ) methods, Closing a File.',
    ],
    [
      'Database Communication in Python',
      'Introduction to MySQL, Creating a Connection, Creating a Cursor Object, Show Databases, Creating a new Database, Creating a table',
      'Alter Table, Insert Operation, Row ID, Read Operation, Update Operation, Delete Operation, Join, Performing Transaction, commit(), rollback(), Closing a Connection.',
    ],
    [
      'Threading in Python',
      ' What is Thread?, Advantage of Threading, Thread Class, Creating Thread using Threading Module, class threading.Thread Methods, join( ), Thread States, Synchronizing Threads, Implement Synchronization in Python, Lock, RLock, and Semaphore.',
    ],
    [
      'Unit Testing with PyTest',
      'What is PyTest?, API, Advantage of PyTest, First Basic PyTest, Assertions in PyTest, How Pytest identifies Test Files and Test Methods, Run Multiple Tests From a Specific File and Multiple Files, Run a subset of Entire Test with PyTest.',
    ],
    [
      ' Python Web Framework',
      'What is a Framework, Web Framework functionality, Django, Django project MVT Structure.',
      ' Creating a basic project using MVT(Models, Views, and Templates) Structure, Creating an App in Django, Django Admin Interface,  URLs, Forms, Authentication, Deployment.',
    ],
    [
      'GUI Tkinter',
      'Tkinter Programming, Tkinter Widgets, Geometry Management, Applications Interactive, Building Text Editor(Example)',
      'Final Project.',
    ],
  ],
};

const PythonCourse = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        linkto="https://airtable.com/shrvynC6nUFRA6Snj"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/pythonbootcamp.jpg"
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={
          <MdAccountBalance style={{ color: '#040A6E', fontSize: '40px' }} />
        }
        description="Batch starts from 27th June 2021"
        linkto="https://airtable.com/shrvynC6nUFRA6Snj"
        btnText="Enroll Know"
      />
      <SyllabusCourseWorkshop curriculum={CourseData.curriculum} />
      {/* <CertificationSection /> */}
      {/* <ProjectSection /> */}
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default PythonCourse;
