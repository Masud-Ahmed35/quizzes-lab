import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Topics from "../components/Topics/Topics";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Statistics from "../components/Statistics/Statistics";
import Quizzes from "../components/Quizzes/Quizzes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <Quizzes></Quizzes>
            },
        ]
    }
])
export default router