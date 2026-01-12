import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/store";
import { Button } from "../../UI/Button/Button";
import { Header } from "../../UI/Header/Header";
import { PostsList } from "../../UI/PostsList/PostsList";
import "./HomePage.css";
import { AuthInfoModal } from "../../UI/Modals/AuthInfoModal/AuthInfoModal";

export default function HomePage() {
    const { isAuth } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.title = "Evapps \u00A0\u2013\u00A0 Главная";
    }, []);
    return (
        <>
            <Header
                title="Там, где мир начинается с&nbsp;путешествий"
                variant="tall"
            />
            <section className="posts">
                <div className="container">
                    <div className="posts__wrapper">
                        <PostsList />
                        {isAuth ? (
                            <Button
                                className="posts__btn"
                                option="link"
                                href="/new-post"
                            >
                                Добавить мое путешествие
                            </Button>
                        ) : (
                            <Button
                                className="posts__btn"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Добавить мое путешествие
                            </Button>
                        )}
                        {isModalOpen && <AuthInfoModal state={true} onClose={() => setIsModalOpen(false)}/>}
                    </div>
                </div>
            </section>
        </>
    );
}
