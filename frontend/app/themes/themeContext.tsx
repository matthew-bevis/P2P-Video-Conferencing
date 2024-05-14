'use client'

import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSystemTheme } from '../_components/useSytemTheme';

const ThemeContext = createContext({
    toggleTheme: () => {},
  });
  
  export const useThemeContext = () => useContext(ThemeContext);
  
  // Themes defined outside the component to avoid recreating them on each render
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  export function ThemeProvider({ children }: { children: ReactNode }) {
    const systemTheme = useSystemTheme(); 
    const [theme, setTheme] = useState(lightTheme);
  
    
    useEffect(() => {
      console.log("System theme changed to:", systemTheme); 
      setTheme(systemTheme === 'dark' ? darkTheme : lightTheme);
    }, [systemTheme]); 
  
    const toggleTheme = () => {
      setTheme((currentTheme) => currentTheme.palette.mode === 'light' ? darkTheme : lightTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ toggleTheme }}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline /> 
          {children}
        </MUIThemeProvider>
      </ThemeContext.Provider>
    );
  }