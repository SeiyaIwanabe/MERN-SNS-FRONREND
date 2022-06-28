import { UserType } from './Type';
import { PostType } from './Type';

export const Users: Array<UserType> = [
    {
        id: 1,
        profilePicture: '/assets/sun-flower.jpg',
        username: 'ShinCode',
    },
    {
        id: 2,
        profilePicture: '/assets/sun-flower.jpg',
        username: 'Yamaki',
    },
    {
        id: 3,
        profilePicture: '/assets/sun-flower.jpg',
        username: 'Koga',
    },
    {
        id: 4,
        profilePicture: '/assets/sun-flower.jpg',
        username: 'Matukubo',
    },
    {
        id: 5,
        profilePicture: '/assets/sun-flower.jpg',
        username: 'Kikukawa',
    },
];

export const Posts: Array<PostType> = [
    {
        id: 1,
        desc: 'コツコツの積み重ねが大事。',
        photo: '/assets/sun-flower.jpg',
        date: '5分前',
        userId: 1,
        like: 20,
        comment: 4,
    },
    {
        id: 2,
        desc: 'MERNスタックが楽しすぎる',
        photo: '/assets/sun-flower.jpg',
        date: '2分前',
        userId: 2,
        like: 140,
        comment: 13,
    },
    {
        id: 3,
        desc: 'ShinCodeさんの解説が分かりやすい。',
        photo: '/assets/sun-flower.jpg',
        date: '10分前',
        userId: 3,
        like: 230,
        comment: 29,
    },
    {
        id: 4,
        desc: 'ShinCodeさんの解説が分かりやすい。',
        photo: '/assets/sun-flower.jpg',
        date: '10分前',
        userId: 4,
        like: 10,
        comment: 1,
    },
    {
        id: 5,
        desc: '定期的に散歩した方が生産性が上がる。',
        photo: '/assets/sun-flower.jpg',
        date: '1分前',
        userId: 5,
        like: 100,
        comment: 3,
    },
];
