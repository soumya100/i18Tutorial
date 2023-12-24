import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/language-selector';

function App() {

  const {t}= useTranslation();

  const {line1, line2, line3}= t("description")
  return (
    <div className={`container`}>
      <LanguageSelector />
   <h1>
   {t(`greeting`)}
    </h1> 
    <p>
      {line1}
    </p>
    <p>
      {line2}
    </p>
    {/* <p>
      {line3}
    </p> */}
    <span>
    <Trans
      i18nKey={line3}
      values={{
        name: "Soumyadeep"
      }}
      components={{1: <b />}}
      />
    </span>
    </div>
  )
}

export default App
