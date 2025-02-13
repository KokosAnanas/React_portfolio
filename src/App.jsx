import Main from './roots/Main/Main'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contacts from "./roots/Contacts/Contacts"
import Portfolio from "./roots/Portfolio/Portfolio";
import Blog from './roots/Blog/Blog'
import { ThemeContext } from './context/context';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App
