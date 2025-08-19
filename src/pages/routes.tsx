import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./timeline";
import { Status } from "./status";

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