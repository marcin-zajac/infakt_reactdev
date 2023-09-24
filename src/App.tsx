import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import './i18n'
import { Accountants } from './pages/accountants/Accountants'

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>route: main</h1>} />
        <Route path={`/${t('router.accountants')}`} element={<Accountants />} />
      </Routes>
    </div>
  )
}

export default App
