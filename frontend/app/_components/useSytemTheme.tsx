'use client'

import { useEffect, useState } from 'react';

export const useSystemTheme = () => {
    const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newTheme = mediaQuery.matches ? 'dark' : 'light';
        setSystemTheme(newTheme);
        console.log("detected theme is:", newTheme); // Correctly log the current theme
      };
  
      handleChange(); // Set and log the theme on component mount
      mediaQuery.addEventListener('change', handleChange);
  
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
  
    return systemTheme;
  };