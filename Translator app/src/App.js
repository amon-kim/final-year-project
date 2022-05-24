import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Startup from './components/Startup/Startup';
import SignTranslation from './components/Sign-Translation/SignToText';
import TextTranslation from './components/Text-Translation/TextTranslation';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
   <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element = { < Startup /> } />
        <Route path="/sign-translation" element = { < SignTranslation /> } />
        <Route path="/text-translation" element = { < TextTranslation /> } />
        <Route path="/profile" element = { < Profile /> } />
        <Route path="*" element = { < NotFound /> } />

      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
