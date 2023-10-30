import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import App from './App';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      }
    ]
  },
]);

export default router;