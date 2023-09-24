import AccountantCard from '../../components/AccountantCard'
import { Body } from '../../components/Typography'

export const Accountants = () => {
  return (
    <>
      <Body variant="bodyL">Accountants page component</Body>

      <AccountantCard
        avatar="https://avatars.githubusercontent.com/u/57039654?v=4"
        firstName="Marcin"
        lastName="Zając"
        phone="+48 737 478 512"
        price={500}
      />
    </>
  )
}
