import { useGetPosts } from "../../api/hooks";
import { Post } from "../Post/Post";
import "./PostsList.css";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "./skeleton/skeleton";

export function PostsList() {
    const { data, isPending, error } = useGetPosts();
    const [visibleCount, setVisibleCount] = useState(6);

    const loader = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (!data) return;

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisibleCount(prev => {
                        const next = prev + 6;
                        return next > data.length ? data.length : next;
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [data]);

    if (isPending) {
        return <Skeleton count={3} />;
    }

    if (!data) {
        return <div>{error?.message || "Нет постов"}</div>;
    }

    return (
        <ul className="posts__list">
            {data
                .slice(0, visibleCount)
                .map(({ id, photo, title, excerpt }) => (
                    <li className="posts__item" key={id}>
                        <Post
                            id={id}
                            photo={photo}
                            title={title}
                            excerpt={excerpt}
                        />
                    </li>
                ))}

            {/* Этот элемент "ловит", когда пользователь доскроллил  */}
            {visibleCount < data.length && (
                <li ref={loader} style={{ height: "100px" }}></li>
            )}
        </ul>
    );
}
