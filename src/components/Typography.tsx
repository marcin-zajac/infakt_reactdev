import styled from 'styled-components'

interface BodyProps {
  variant?: 'bodyL' | 'bodyM' | 'bodyS'
  color?: 'primary' | 'secondary'
}

const Body = styled.text<BodyProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant ?? 'bodyM'].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant ?? 'bodyM'].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? 'bodyM'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme, color }) => theme.text[color ?? 'primary']};
`

interface SubtitleProps {
  variant?: 'subtitle1' | 'subtitle2'
}

const Subtitle = styled.text<SubtitleProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant ?? 'subtitle1'].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant ?? 'subtitle1'].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? 'subtitle1'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme, color }) => theme.text[color ?? 'primary']};
`

const Disclaimer = styled.text<SubtitleProps>`
  font-family: ${({ theme }) => theme.typography.disclaimer.fontFamily};
  font-size: ${({ theme }) => theme.typography.disclaimer.fontSize};
  line-height: ${({ theme }) => theme.typography.disclaimer.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
`

export { Body, Subtitle, Disclaimer }
