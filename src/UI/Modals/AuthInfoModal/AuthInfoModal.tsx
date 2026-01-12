import { Button } from "../../Button/Button";
import "./AuthInfoModal.css";

export function AuthInfoModal({ 
    state, 
    onClose 
}: { 
    state: boolean; 
    onClose: () => void;
}) {
    if (!state) return null;

    return (
        <dialog className="modal" open={true}>
            <div className="modal-content">
                <button
                    className="modal-close"
                    aria-label="Close modal"
                    onClick={onClose}
                >
                    <svg
                        className="icon-close"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div className="modal-header">
                    <div className="modal-icon icon-info">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M12 16V12M12 8H12.01"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <h2 className="modal-title">
                        Информация о&nbsp;авторизации
                    </h2>
                </div>

                <div className="modal-body">
                    <p className="modal__text">
                        Добавить посты можно только после авторизации.
                    </p>
                </div>

                <div className="modal-footer">
                    <Button className="modal__btn" option="link" href="/register" variant="transparent">
                        Зарегистрироваться
                    </Button>
                    <Button className="modal__btn" option="link" href="/login" variant="fill">
                        Войти
                    </Button>
                </div>
            </div>
        </dialog>
    );
}
