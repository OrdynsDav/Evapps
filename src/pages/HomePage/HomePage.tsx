import { Button } from "../../UI/Button/Button";
import { Header } from "../../UI/Header/Header";
import { PostsList } from "../../UI/PostsList/PostsList";
import "./HomePage.css";

export default function HomePage() {
    return (
        <>
            <Header title="Там, где мир начинается с путешествий" variant="tall"/>
            <section className="posts">
                <div className="container">
                    <div className="posts__wrapper">
                        <PostsList />
                        <Button className="posts__btn" option="link" href="/new-post">
                            Добавить мое путешествие
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
