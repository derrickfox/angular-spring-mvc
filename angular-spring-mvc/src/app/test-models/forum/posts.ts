import { Post } from '../../models/forum/post';
import { testForumUsers } from './forum-users';

export const TEST_POSTS: Post[] = [
  new Post(
    1,
    'Quicksilver Release Notes (04/29/2023)',
    1, // General Discussion
    testForumUsers[0],
    'Hello FITBIR Community',
    new Date(),
    0,
    new Date()
  ),
  new Post(
    2,
    'How to Use Advanced Query Features',
    2, // Query Tool
    testForumUsers[1],
    'Tips and tricks for complex queries',
    new Date(),
    3,
    new Date()
  ),
  new Post(
    3,
    'Data Upload Best Practices',
    3, // Data Repository
    testForumUsers[2],
    'Guidelines for successful data uploads',
    new Date(),
    5,
    new Date()
  ),
  new Post(
    4,
    'MRI Data Submission Guidelines',
    4, // Data Repository: Imaging Submission
    testForumUsers[3],
    'Updated process for submitting imaging data',
    new Date(),
    2,
    new Date()
  ),
  new Post(
    5,
    'Genomics Data Format Requirements',
    5, // Data Repository: Genomics Submission
    testForumUsers[4],
    'Standardized formats for genomics submissions',
    new Date(),
    1,
    new Date()
  ),
  new Post(
    6,
    'Clinical Assessment Templates',
    6, // Data Repository: Clinical Assessments Submission
    testForumUsers[5],
    'New templates available for clinical data',
    new Date(),
    4,
    new Date()
  ),
  new Post(
    7,
    'Data Dictionary Updates',
    7, // Data Dictionary
    testForumUsers[6],
    'Recent changes to the data dictionary',
    new Date(),
    0,
    new Date()
  ),
  new Post(
    8,
    'Imaging Metadata Standards',
    8, // Data Dictionary: Imaging
    testForumUsers[7],
    'Updated imaging metadata requirements',
    new Date(),
    2,
    new Date()
  ),
  new Post(
    9,
    'Genomics Data Elements Guide',
    9, // Data Dictionary: Genomics
    testForumUsers[8],
    'Comprehensive guide to genomics data elements',
    new Date(),
    1,
    new Date()
  ),
  new Post(
    10,
    'Clinical Assessment Definitions',
    10, // Data Dictionary: Clinical Assessments
    testForumUsers[9],
    'Standard definitions for clinical assessments',
    new Date(),
    3,
    new Date()
  ),
  new Post(
    11,
    'Cross Mapping Tutorial',
    11, // Cross Mapping
    testForumUsers[0],
    'How to use the cross mapping feature',
    new Date(),
    2,
    new Date()
  ),
  new Post(
    12,
    'Subject Management Overview',
    12, // Subject Management
    testForumUsers[1],
    'Guide to managing research subjects',
    new Date(),
    0,
    new Date()
  ),
  new Post(
    13,
    'Meta Study Creation Guide',
    13, // Meta Study
    testForumUsers[2],
    'Steps to create and manage meta studies',
    new Date(),
    1,
    new Date()
  ),
  new Post(
    14,
    'ProFoRMS Update Notes',
    14, // ProFoRMS
    testForumUsers[3],
    'Latest features in ProFoRMS',
    new Date(),
    4,
    new Date()
  )
];
