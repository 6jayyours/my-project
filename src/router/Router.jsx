import { BrowserRouter as Router, Route, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/", element: <App />
        
    },
]);

export default router;