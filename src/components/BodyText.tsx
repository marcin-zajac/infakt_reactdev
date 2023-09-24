import styled from 'styled-components'

interface BodyProps {
  size: 'S' | 'M' | 'L'
  color?: 'gray'
}

const fontSizes: Record<BodyProps['size'], string> = {
  S: '14px',
  M: '16px',
  L: '18px',
}

const lineHeights: Record<BodyProps['size'], string> = {
  S: '20px',
  M: '24px',
  L: '28px',
}

const color: Record<BodyProps['size'], string> = {
  S: '20px',
  M: '24px',
  L: '28px',
}

const BodyText = styled.div<BodyProps>`
  opacity: 1;
  color: ${({ color }) => color || 'black'};
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-align: center;
  line-height: ${({ size }) => lineHeights[size]};
  font-size: ${({ size }) => fontSizes[size]};
`

export default BodyText
