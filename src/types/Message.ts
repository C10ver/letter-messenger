import User from './User';

export default interface Message {
    author: User;
    text: string;
}