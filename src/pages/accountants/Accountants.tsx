import styled from 'styled-components'
import AccountantCard from '../../components/AccountantCard'
import logo from './logo-infakt.svg'

const PageContainer = styled.div`
  padding-inline: 84px;
`
const Logo = styled.img`
  margin: 48px 0;
  height: 38px;
`

export const Accountants = () => {
  return (
    <PageContainer>
      <Logo src={logo} alt="logo" />
      <AccountantCard
        avatar="https://avatars.githubusercontent.com/u/57039654?v=4"
        firstName="Marcin"
        lastName="Zając"
        phone="+48 737 478 512"
        price={500}
      />
    </PageContainer>
  )
}
