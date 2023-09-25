import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import AccountantCard from '../../components/AccountantCard'
import { Button } from '../../components/Button'
import useFetchData from './hooks/useFetchData'
import { Headline } from '../../components/Typography'

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`

export const Accountants = () => {
  const { t } = useTranslation()
  const { data, loading, error, fetchMore } = useFetchData()

  return (
    <>
      <CardContainer>
        {loading && <Headline variant="headline4">Loading...</Headline>}
        {error && <Headline>Error</Headline>}
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
    </>
  )
}
