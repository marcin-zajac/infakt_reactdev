import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.blue[600]};
  background-color: ${({ theme }) => theme.colors.blue[50]};
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  line-height: 20px;
  width: fit-content;
  padding: 8px 16px;
`

export { Button }
