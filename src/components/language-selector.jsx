import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages =[
    {code: "en", lang:"english"},
    {code:"fr", lang:"French"},
    {code:"hi", lang:"hindi"},
    {code: "ar", lang:"arabic"}
];


const LanguageSelector = () => {
    const {i18n}= useTranslation()

    const changeLanguage=(languageCode)=>{
        i18n.changeLanguage(languageCode)
    }

    useEffect(() => {
     document.body.dir = i18n.dir()
    }, [i18n, i18n.language])
    
  return (
   <div className="btn-container">
    {
        languages.map((lng)=>{
            return <button key={lng.code} onClick={()=>changeLanguage(lng.code)}
            className={lng.code === i18n.language ? "selected" : ""}
            >
                {lng.lang}
            </button>
        })
    }
   </div>
  )
}

export default LanguageSelector