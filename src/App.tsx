import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './i18n'
import { Accountants } from './pages/accountants/Accountants'
import { Main } from './pages/main/Main'
import logo from './vendor/logo-infakt.svg'

const PageContainer = styled.div`
  padding-inline: 84px;
  width: 1440px;
  margin: auto;
`
const Logo = styled.img`
  margin: 48px 0;
  height: 38px;
`

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <PageContainer>
        <Logo src={logo} alt="logo" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={`/${t('router.accountants')}`} element={<Accountants />} />
        </Routes>
      </PageContainer>
    </div>
  )
}

export default App
