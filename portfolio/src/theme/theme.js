export const toDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = 'dark';
    updateTheme();
}
 
export const toLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = 'light';
    updateTheme();
}
 
export const toSystemMode = () => {
    localStorage.theme = 'system';
    updateTheme();
}

export const updateTheme = () =>{
    if (! ('theme' in localStorage) ) {
        localStorage.theme = 'system';
    }
}