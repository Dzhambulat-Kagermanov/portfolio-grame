import { useContext } from 'react'
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../context/theme/ThemeContext'

interface IUseThemeProps {
	theme: Theme
	changeTheme: (theme: Theme) => void
}

const useTheme: () => IUseThemeProps = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	function changeTheme(theme: Theme) {
		setTheme(theme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
	}
	return { theme, changeTheme }
}

export default useTheme
