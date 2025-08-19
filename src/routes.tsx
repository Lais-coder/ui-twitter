import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/timeline";
import { Status } from "./pages/status";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Timeline/>
    },
    {
        path: '/status',
        element: <Status/>
    }
]

)