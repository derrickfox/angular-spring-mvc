export class ForumUser {
    constructor(
        public userId: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public username: string
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
