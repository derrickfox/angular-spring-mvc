import { ForumUser } from './forum-user';

export class Post {
    constructor(
        public id: number,
        public title: string,
        public topicId: number,
        public creator: ForumUser,
        public content: string,
        public dateCreated: Date = new Date(),
        public numberOfReplies: number = 0,
        public lastReplyDate?: Date
    ) {}

    get creatorName(): string {
        return this.creator.firstName;
    }

    get isNew(): boolean {
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
        return (Date.now() - this.dateCreated.getTime()) < oneDay;
    }

    get hasReplies(): boolean {
        return this.numberOfReplies > 0;
    }
}

/* const post = new Post(
	1,
	"Welcome to the Forum",
	"General",
	forumUser,  // ForumUser instance
	"This is the content of the post...",
	new Date(),
	0
); */