import { Post } from '../../modules/forum/models/post.model';
import { testForumUsers } from './test-forum-users';

export const TEST_POSTS: Post[] = [
  new Post(
    1,
    'Quicksilver Release Notes (04/29/2023)',
    1, // General Discussion
    testForumUsers[0],
    'The latest release of the Quicksilver platform introduces significant updates, including performance optimizations, new user interface features, and enhanced data integration capabilities. Key highlights include improved data query speeds, streamlined workflows, and expanded support for diverse datasets. Detailed documentation accompanies this release to ensure a smooth transition for users.',
    new Date(),
    0,
    new Date()
  ),
  new Post(
    2,
    'How to Use Advanced Query Features',
    2, // Query Tool
    testForumUsers[1],
    'Mastering advanced query features allows researchers to extract complex insights from large datasets efficiently. This guide delves into multi-level filtering, conditional logic application, and visualization tools to enhance data exploration. It also includes examples and best practices for constructing effective queries.',
    new Date(),
    3,
    new Date()
  ),
  new Post(
    3,
    'Data Upload Best Practices',
    3, // Data Repository
    testForumUsers[2],
    'Successful data uploads require adherence to standardized procedures and formats. This article outlines key practices, such as verifying data integrity, utilizing pre-upload validation tools, and adhering to metadata requirements. These steps ensure data accuracy and compliance with repository guidelines.',
    new Date(),
    5,
    new Date()
  ),
  new Post(
    4,
    'MRI Data Submission Guidelines',
    4, // Data Repository: Imaging Submission
    testForumUsers[3],
    'Submitting MRI data involves specific steps to maintain data fidelity and usability. This update covers the standardized formats, anonymization techniques, and quality checks required for MRI data submission. It also highlights recent changes to submission protocols.',
    new Date(),
    2,
    new Date()
  ),
  new Post(
    5,
    'Genomics Data Format Requirements',
    5, // Data Repository: Genomics Submission
    testForumUsers[4],
    'To ensure compatibility and analytical accuracy, genomics data submissions must follow standardized formats. This article discusses the accepted file types, annotation guidelines, and data structure requirements for genomics datasets. Compliance with these standards facilitates seamless integration and analysis.',
    new Date(),
    1,
    new Date()
  ),
  new Post(
    6,
    'Clinical Assessment Templates',
    6, // Data Repository: Clinical Assessments Submission
    testForumUsers[5],
    'New templates for clinical assessments streamline the submission process and enhance data consistency. This article introduces these templates, detailing their structure, use cases, and integration into existing workflows. Step-by-step instructions ensure ease of adoption.',
    new Date(),
    4,
    new Date()
  ),
  new Post(
    7,
    'Data Dictionary Updates',
    7, // Data Dictionary
    testForumUsers[6],
    'The latest updates to the data dictionary include new entries, revised definitions, and expanded metadata fields. These changes aim to enhance data clarity and utility. This post provides a comprehensive overview of the updates and their implications for data management.',
    new Date(),
    0,
    new Date()
  ),
  new Post(
    8,
    'Imaging Metadata Standards',
    8, // Data Dictionary: Imaging
    testForumUsers[7],
    'Updated imaging metadata standards ensure accurate representation and interoperability of imaging data. This article covers the required metadata fields, standard terminologies, and best practices for documenting imaging datasets.',
    new Date(),
    2,
    new Date()
  ),
  new Post(
    9,
    'Genomics Data Elements Guide',
    9, // Data Dictionary: Genomics
    testForumUsers[8],
    'The comprehensive guide to genomics data elements provides detailed definitions, usage scenarios, and examples. This guide supports researchers in understanding and utilizing data elements effectively, ensuring consistency across genomics studies.',
    new Date(),
    1,
    new Date()
  ),
  new Post(
    10,
    'Clinical Assessment Definitions',
    10, // Data Dictionary: Clinical Assessments
    testForumUsers[9],
    'This resource compiles standard definitions for clinical assessments, offering clarity and uniformity in data reporting. Each definition is accompanied by context, usage guidelines, and examples, making it a valuable tool for clinical researchers.',
    new Date(),
    3,
    new Date()
  ),
  new Post(
    11,
    'Cross Mapping Tutorial',
    11, // Cross Mapping
    testForumUsers[0],
    'The cross mapping feature simplifies the alignment of datasets with different schemas. This tutorial covers the basics of cross mapping, including creating mapping rules, resolving conflicts, and validating mapped data.',
    new Date(),
    2,
    new Date()
  ),
  new Post(
    12,
    'Subject Management Overview',
    12, // Subject Management
    testForumUsers[1],
    'Managing research subjects effectively involves comprehensive tracking and ethical oversight. This overview provides strategies for subject management, including data privacy considerations, consent management, and tracking longitudinal data.',
    new Date(),
    0,
    new Date()
  ),
  new Post(
    13,
    'Meta Study Creation Guide',
    13, // Meta Study
    testForumUsers[2],
    'Creating meta studies involves integrating and analyzing data from multiple studies. This guide outlines the steps for designing meta studies, selecting datasets, and applying statistical methods to derive insights.',
    new Date(),
    1,
    new Date()
  ),
  new Post(
    14,
    'ProFoRMS Update Notes',
    14, // ProFoRMS
    testForumUsers[3],
    'The latest ProFoRMS update introduces new features, including customizable forms, enhanced data validation, and user-friendly interfaces. This article explores these updates, providing examples and implementation tips.',
    new Date(),
    4,
    new Date()
  )
];
