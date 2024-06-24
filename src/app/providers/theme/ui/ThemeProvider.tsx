import { FC, ReactNode, useMemo, useState } from 'react'
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext'
import { IChildrenProp } from 'app/types/reactChildren'

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DAY

const ThemeProvider: FC<IChildrenProp> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	const defaultThemeProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={defaultThemeProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider }
