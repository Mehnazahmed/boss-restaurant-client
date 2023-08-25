import { useEffect } from "react";

const useDarkTheme = () => {
    //light - dark theme generator
  const handleDark=()=>{
    setDark(!dark)
    localStorage.setItem("dark-mode", !dark)
  };

  useEffect(()=>{
    if(dark){
      document.querySelector('html').setAttribute('data-theme','dark')
    }else{
      document.querySelector('html').setAttribute('data-theme','doctortheme')
    }
  },[dark])

  useEffect(()=>{
    const localDark =JSON.parse(localStorage.getItem("dark-mode"));
    console.log(localDark)
    setDark(localDark)
  },[])
  return [handleDark]
};

export default useDarkTheme;