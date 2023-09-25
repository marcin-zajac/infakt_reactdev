import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import styled from 'styled-components'

export const Main = () => {
  const { t } = useTranslation()

  const StyledLink = styled(Link)`
    display: block;
  `

  return (
    <StyledLink to={`/${t('router.accountants')}`}>
      <Button >{t('go_to_accountants_page')}</Button>
    </StyledLink>
  )
}
