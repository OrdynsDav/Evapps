import { BASE_URL } from "../../api/fetches";
import type { PostProps } from "../../models/Post";
import "./Post.css";

export function Post({ id, photo, title, excerpt }: PostProps) {
    return (
        <>
            <article className="post">
                <img
                    className="post__img"
                    src={`${BASE_URL}${photo}`}
                    width={370}
                    height={288}
                    alt={`Картинка для поста с названием ${title}`}
                    loading="lazy"
                />
                <div className="post__content">
                    <div className="post__description">
                        <h2 className="post__title">{title}</h2>
                        <p className="post__text">{excerpt}</p>
                    </div>
                </div>
                <div className="post__info">
                    <span>Италия, Рим</span>
                    <a href={`/post/${id}`} className="post__link">
                        Подробнее
                    </a>
                </div>
            </article>
        </>
    );
}
