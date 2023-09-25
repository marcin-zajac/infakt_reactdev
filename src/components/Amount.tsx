import React from 'react'
import styled from 'styled-components'
import { Body, Disclaimer } from './Typography'

const PriceWrapper = styled.div`
  display: inline;
`

const StyledDisclaimer = styled(Disclaimer)`
margin-left: 4px;
color: ${({ theme }) => theme.colors.primary};
`

interface AmountProps {
    amount: number
    currency: "PLN" | "EUR"
}
const Amount = ({amount, currency} :AmountProps) => {
  return (
    <PriceWrapper>
    <Body variant="bodyM">{amount.toFixed(2)}</Body>
    <StyledDisclaimer style={{ marginLeft: '4px', color: 'black' }}>{currency}</StyledDisclaimer>
  </PriceWrapper>
  )
}

export default Amount