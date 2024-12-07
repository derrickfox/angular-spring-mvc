import { ForumUser } from '../../models/forum/forum-user';
import { Post } from '../../models/forum/post';
import { TEST_USERS } from './forum-users';

export const TEST_POSTS: Post[] = [
    new Post(
        1,
        "Welcome to the Forum",
        "General",
        TEST_USERS[0],
        "Hello everyone! This is our new forum. Feel free to introduce yourself!",
        new Date("2024-03-15"),
        5,
        new Date("2024-03-16")
    ),
    new Post(
        2,
        "Programming Tips & Tricks",
        "Programming",
        TEST_USERS[1],
        "Share your favorite programming tips and tricks here!",
        new Date("2024-03-14"),
        3,
        new Date("2024-03-15")
    ),
    new Post(
        3,
        "Weekly Discussion Thread",
        "General",
        TEST_USERS[2],
        "What's everyone working on this week?",
        new Date(),
        0
    ),
    new Post(
        4,
        "Angular Best Practices",
        "Programming",
        TEST_USERS[3],
        "Let's discuss Angular development best practices and patterns.",
        new Date("2024-03-13"),
        8,
        new Date("2024-03-16")
    ),
    new Post(
        5,
        "Spring Boot Tips",
        "Programming",
        TEST_USERS[4],
        "Share your Spring Boot knowledge and experiences.",
        new Date("2024-03-12"),
        6,
        new Date("2024-03-15")
    )
];
