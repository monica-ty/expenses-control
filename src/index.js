import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// document.getElementById is to get root from index.html in public folder
const root = ReactDOM.createRoot(document.getElementById('root'));
// replace the root div with <App />
root.render(<App />);
