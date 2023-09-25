import styled from 'styled-components'

interface HeadlineProps {
  variant?: 'headline1' | 'headline2' | 'headline3' | 'headline4' | 'headline5' | 'headline6'
}

const Headline = styled.span.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<HeadlineProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant ?? 'headline1'].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant ?? 'headline1'].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? 'headline1'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme, color }) => theme.text[color ?? 'primary']};
`
interface BodyProps {
  variant?: 'bodyL' | 'bodyM' | 'bodyS'
  color?: 'primary' | 'secondary'
}

const Body = styled.span.withConfig({
  shouldForwardProp: (prop) => !['variant', 'color'].includes(prop),
})<BodyProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant ?? 'bodyM'].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant ?? 'bodyM'].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? 'bodyM'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme, color }) => theme.text[color ?? 'primary']};
`

interface SubtitleProps {
  variant?: 'subtitle1' | 'subtitle2'
}

const Subtitle = styled.span.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<SubtitleProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant ?? 'subtitle1'].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant ?? 'subtitle1'].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? 'subtitle1'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme, color }) => theme.text[color ?? 'primary']};
`

const Disclaimer = styled.span<SubtitleProps>`
  font-family: ${({ theme }) => theme.typography.disclaimer.fontFamily};
  font-size: ${({ theme }) => theme.typography.disclaimer.fontSize};
  line-height: ${({ theme }) => theme.typography.disclaimer.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
`

export { Body, Subtitle, Disclaimer, Headline }
