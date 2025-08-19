import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/timeline";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Timeline/>
    },
    {
        path: '/tweet',
        element: <h1>Tweet</h1>
    }
]

)