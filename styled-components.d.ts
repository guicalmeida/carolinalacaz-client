import light from 'styles/themes/light'
import dark from 'styles/themes/dark'

// inferência de tipos
type Theme = typeof light
type Theme = typeof dark

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
