import "./skeleton.css";

export function Skeleton({ count }: { count: number }) {
    return (
        <ul className="skeleton-list">
            {Array.from({ length: count }).map((_, index) => (
                <li className="skeleton" key={index}></li>
            ))}
        </ul>
    );
}
