// my-react-component/MyReactComponent.tsx
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => <div>React Home</div>;
const About = () => <div>About React</div>;

const MyReactComponent: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default MyReactComponent;
