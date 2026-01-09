import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MainLoader } from "./UI/Loaders/MainLoader/MainLoader";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

const LazyHomePage = lazy(() =>
    Promise.all([
        import("./pages/HomePage/HomePage"),
        new Promise(resolve => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
);

const LazyPostPage = lazy(() =>
    Promise.all([
        import("./pages/PostPage/PostPage"),
        new Promise(resolve => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
);

const LazyLoginPage = lazy(() =>
    Promise.all([
        import("./pages/LoginPage/LoginPage"),
        new Promise(resolve => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
);

const LazyRegisterPage = lazy(() =>
    Promise.all([
        import("./pages/RegisterPage/RegisterPage"),
        new Promise(resolve => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Suspense fallback={<MainLoader />}>
                    <Routes>
                        <Route index path="/" element={<LazyHomePage />} />
                        <Route path="/new-post" element={<LazyPostPage />} />
                        <Route path="/login" element={<LazyLoginPage />} />
                        <Route path="/register" element={<LazyRegisterPage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
