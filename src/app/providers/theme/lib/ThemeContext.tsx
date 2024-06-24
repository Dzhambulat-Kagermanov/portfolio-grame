import { createContext } from 'react'

export enum Theme {
	DAY = 'day',
	SUNSET = 'sunset',
	NIGHT = 'night',
	MORNING = 'morning',
}

export interface IThemeContextProps {
	theme?: Theme
	setTheme?: (them: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})
export const LOCAL_STORAGE_THEME_KEY = 'theme'
