import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import AccountantCard from '../../components/AccountantCard'
import { Button } from '../../components/Button'
import useFetchData from './hooks/useFetchData'
import logo from './logo-infakt.svg'

const PageContainer = styled.div`
  padding-inline: 84px;
  max-width: 1500px;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`
const Logo = styled.img`
  margin: 48px 0;
  height: 38px;
`

export const Accountants = () => {
  const { t } = useTranslation()
  const { data, loading, error, fetchMore } = useFetchData()

  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  return (
    <PageContainer>
      <Logo src={logo} alt="logo" />
      <CardContainer>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {data &&
          data.map((item, index) => (
            <AccountantCard
              avatar={item.picture.medium}
              firstName={item.name.first}
              lastName={item.name.last}
              phone={item.cell}
              email={item.email}
              key={index}
            />
          ))}
      </CardContainer>
      <Button onClick={fetchMore} style={{ marginTop: '24px' }}>
        {t('see_more')}
      </Button>
    </PageContainer>
  )
}
