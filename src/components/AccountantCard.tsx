import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Body, Disclaimer, Subtitle } from './Typography'
import { Button } from './Button'
import Amount from './Amount'

interface AccountantCardProps {
  avatar: string
  firstName: string
  lastName: string
  phone: string
  email: string
}

const CardContainer = styled.div`
  width: 300px;
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

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-size: 100%;
`
const AccountantCard: React.FC<AccountantCardProps> = ({
  avatar,
  firstName,
  lastName,
  phone,
  email,
}) => {
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
        <StyledHref href={`mailto:${email}`}>{email}</StyledHref>
      </Body>
      <Body variant="bodyS" color="secondary" style={{ marginTop: '24px' }}>
        {t('phone')}
      </Body>
      <Body variant="bodyM">{phone}</Body>
      <Body variant="bodyS" color="secondary" style={{ marginTop: '24px' }}>
        {t('average_net_price_of_service_per_month')}
      </Body>
      <Amount amount={350} currency="PLN" />
      <Button style={{ marginTop: '24px', border: 'none' }}> {t('find_out_more')}</Button>
    </CardContainer>
  )
}

export default AccountantCard
