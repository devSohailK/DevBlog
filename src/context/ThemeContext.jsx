import {useContext, useState, createContext} from 'react';
import { useEffect } from 'react';


export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.className = theme;

    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>

    )  
}

export const useTheme = () => useContext(ThemeContext);