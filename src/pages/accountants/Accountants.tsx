import styled from 'styled-components'
import AccountantCard from '../../components/AccountantCard'
import logo from './logo-infakt.svg'
import useFetchData from './hooks/useFetchData'

const PageContainer = styled.div`
  padding-inline: 84px;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`
const Logo = styled.img`
  margin: 48px 0;
  height: 38px;
`

export const Accountants = () => {
  const { data, loading, error } = useFetchData()
  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  return (
    <PageContainer>
      <Logo src={logo} alt="logo" />
      <CardWrapper>
        {data &&
          data.map((item, index) => (
            <AccountantCard
              avatar={item.picture.thumbnail}
              firstName={item.name.first}
              lastName={item.name.last}
              phone={item.cell}
              key={index}
            />
          ))}
      </CardWrapper>
    </PageContainer>
  )
}
