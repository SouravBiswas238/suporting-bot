import { useState } from "react";
import { useEffect } from "react";


const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        const root = window.document.documentElement

        root.classList.add(theme)
        root.classList.remove(colorTheme)
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])


    return [colorTheme, setTheme]
};

export default useDarkMode;