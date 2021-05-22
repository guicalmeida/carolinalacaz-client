import { createContext, useCallback, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import dark from 'styles/themes/dark'
import light from 'styles/themes/light'
import { Theme } from '../../styled-components'

interface ThemeContextData {
  toggleTheme(): void
  turnDark(): void
  turnLight(): void
  theme: Theme
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    theme.title == 'light' ? setTheme(dark) : setTheme(light)
  }, [theme])

  const turnDark = () => setTheme(dark)

  const turnLight = () => setTheme(light)

  return (
    <ThemeContext.Provider value={{ toggleTheme, turnLight, turnDark, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
