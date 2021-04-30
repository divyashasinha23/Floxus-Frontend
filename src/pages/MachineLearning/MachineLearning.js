import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import SyllabusCourse from '../../components/SyllabusCourse/SyllabusCourse';
import Footer from '../../components/Footer/Footer';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import TestimonialSection from '../../components/Testimonial/Testimonial';

const CourseData = {
  title: 'Machine Learning Bootcamp',
  description:
    'Get hands on Python skills and accelerate your Machine Learning career',
  courseHerodata: [
    'To develop skills of using recent machine learning software',
    'To develop skills to build machine learning based product ',
    'To gain experience of doing independent study and research.',
  ],
  price: '9,999',
  courseServices: ['90+ hours', '7+', '24/7'],
  courseObjectives: [
    'Gain knowledge about basic concepts of Machine Learning ',
    'Identify machine learning techniques suitable for a given problem',
    'Solve the problems using various machine learning techniques ',
    'Apply Dimensionality reduction techniques. ',
    'Design application using machine learning techniques. ',
    'How to deploy your ML model on cloud ',
  ],
  Topics: [
    'Python Programming',
    'Computer Programming',
    'Numpy',
    'Scipy',
    'Sklearn',
    'matplotlib',
    'Algorithms',
    'Linear Algebra',
    'Statistics',
    'Probablity',
  ],
  prerequisite: [
    'Basic of linear algebra and statistics ',
    'Basics of any programming language is preferred  ',
  ],
  curriculum: [
    [
      'Introduction to Machine Learning',
      'History and Evolution',
      'Artificial Intelligence Evolution',
      'Application of Machine Learning in Technology and Science',
    ],
    [
      'Supervised Learning, Unsupervised Learning',
      'Difference between continuous supervised learning and discrete learning',
      'Code a Linear Regression in Python with scikit-learn.',
      'SciPy for Scientific Computing',
      'Understand different error metrics such as SSE, and RSquared in the context of Linear Regressions.',
      'K-Nearest Neighor, Linear Models, Naive Bayes Classifiers, Decision trees, Support Vector Machines.',
      'Machine Learning Packages, Numpy, Scipy, Matplotlib, Pandas, Sklearn',
    ],
    [
      'Supervised Learning - Regression, Classification, Generalization, Overfitting and Underfitting.',
      'Classification - Generative, Descriminative, Use of different metrices such as accuracy score, confusion matrix, classification report.',
    ],
    [
      'Unsupervised Learning and Preprocessing',
      'Challenges in unsupervised Learning',
      'Preprocessing and Scaling',
      'Applying data transformations.',
      'Scaling training and test data the same way',
      'Clustering (K-means clustering).',
    ],
    [
      'Dimensionality Reduction, Feature Extraction and Manifold Learning.',
      'Principal Component Analysis along with mathematical aspects.',
    ],
    [
      'Prepare your data for machine learning',
      'Need for Data Pre-processing.',
      'Data Transforms, Rescale Data, Standardize Data, Normalize Data and Binarize Data.',
    ],
    [
      'Feature Selection for Machine Learning',
      'Univariate Selection, Recursive Feature Elimination',
      'Principal Component Analysis, Feature Importance.',
    ],
    [
      'Evaluate the Performance of Machine Learning Algorithms with Resampling.',
      'Split into Train and Test sets.',
      'K-fold Cross Validation.',
      'Leave One Out Cross Validation.',
      'Repeated Random Test-Train Splits.',
      'What Techniques to use When.',
      'Machine Learning algorithm Performance Metrices.',
      'Algorithm Evaluation Metrics, Classification Metrices, Regression Metrices.',
      'Compare Machine Learning Algorithms',
      'Automate Machine Learning workflows with pipelines.',
    ],
    [
      'Spot-Check classification algorithms.',
      'Linear Machine Learning Algorithms.',
      'Non-linear Machine Learning Algorithms.',
    ],
    [
      'Natural Language Processing.',
      'Using Natural Language Toolkit(NLTK).',
      'ChatBot using chatterbot library.',
      'Save and load Machine Learning Models.',
      'Finalize your Model with pickle.',
      'Finalize your Model with joblib.',
    ],
  ],
};

const MachineLearning = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/MachineLearning.jpg"
        active="false"
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        BtnText="Notify Me"
        FormTitle="Upcoming Batch Details"
      />
      <SyllabusCourse curriculum={CourseData.curriculum} />
      <CertificationSection image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/ai9002.jpg" />
      {/* <ProjectSection /> */}
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default MachineLearning;
