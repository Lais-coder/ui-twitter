import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./timeline";
import { Status } from "./status";
import { Default } from "../layouts/Defaults";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Default/>,
        children: [
        {
            path: '/',
            element: <Timeline/>
        },
        {
            path: '/status',
            element: <Status/>
        }
        ]
    }
]
)