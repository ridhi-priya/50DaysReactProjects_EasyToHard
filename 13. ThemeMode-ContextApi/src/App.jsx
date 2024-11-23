import { useState, useEffect } from 'react';
import {ThemeProvider} from '../src/context/Theme.js'
import ThemeButton from './components/ThemeButton.jsx';
import Card from './components/Card.jsx';

const App = () => {

  const [themeMode, setThemeMode] = useState('dark')
  const darkMode= ()=>{
    setThemeMode('dark')
  }

  const lightMode = ()=>{
    setThemeMode('light')
  }

  useEffect(() => {
    const htmlElement=document.querySelector('html')
    htmlElement.classList.remove('light','dark')
    htmlElement.classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex jutify-end mb-4">
          {/* theme button */}
          <ThemeButton/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          {/* card */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
