import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Body, Disclaimer, Subtitle } from './Typography'
import { Button } from './Button'

interface AccountantCardProps {
  avatar: string
  firstName: string
  lastName: string
  phone: string
  price: number
}

const CardContainer = styled.div`
  width: 252px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`
const CardHeaderWrapper = styled.div`
  display: flex;
`
const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`

const StyledHref = styled.a`
  color: ${({ theme }) => theme.text.primary};
`

const PriceWrapper = styled.div`
  display: inline;
`

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-size: 100%;
`
const AccountantCard: React.FC<AccountantCardProps> = ({ avatar, firstName, lastName, phone }) => {
  const { t } = useTranslation()

  return (
    <CardContainer>
      <CardHeaderWrapper>
        <Avatar src={avatar} alt="Avatar" />
        <DetailsWrapper>
          <Body color="secondary">{t('your_accountant')}</Body>
          <Subtitle style={{ fontWeight: 700 }}>
            {firstName} {lastName}
          </Subtitle>
        </DetailsWrapper>
      </CardHeaderWrapper>
      <Body variant="bodyS" color="secondary" style={{ marginTop: '24px' }}>
        {t('email')}
      </Body>
      <Body variant="bodyM">
        <StyledHref href="mailto:mr.marcinzajac@outlook.com">mr.marcinzajac@outlook.com</StyledHref>
      </Body>
      <Body variant="bodyS" color="secondary" style={{ marginTop: '24px' }}>
        {t('phone')}
      </Body>
      <Body variant="bodyM">{phone}</Body>
      <Body variant="bodyS" color="secondary" style={{ marginTop: '24px' }}>
        {t('average_net_price_of_service_per_month')}
      </Body>
      <PriceWrapper>
        <Body variant="bodyM">350.00</Body>
        <Disclaimer style={{ marginLeft: '4px', color: 'black' }}>PLN</Disclaimer>
      </PriceWrapper>
      <Button style={{ marginTop: '24px', border: 'none' }}> {t('find_out_more')}</Button>
    </CardContainer>
  )
}

export default AccountantCard