export interface PostProps {
    id: number;
    title: string;
    excerpt: string;
    photo: string;
}

export interface UserPost {
    id: number,
    title: string,
    description: string,
    country: string,
    city: string,
    photo: string,
    comments: [
        []
    ],
    userInfo: {
        full_name: string,
        city: string,
        country: string,
        bio: string,
    }
}