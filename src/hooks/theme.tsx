import { createContext, useCallback, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import dark from 'styles/themes/dark'
import light from 'styles/themes/light'
import { Theme } from '../../styled-components'

interface ThemeContextData {
  toggleTheme(): void
  theme: Theme
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    theme.title == 'light' ? setTheme(dark) : setTheme(light)
  }, [theme])

  const turnDark = useCallback(() => {
    setTheme(dark)
  }, [theme])

  const turnLight = useCallback(() => {
    setTheme(dark)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
