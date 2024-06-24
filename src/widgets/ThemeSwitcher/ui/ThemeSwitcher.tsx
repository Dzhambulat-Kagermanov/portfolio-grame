import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/theme'
import { Theme } from 'app/providers/theme'
import morningIcon from 'shared/assets/icons/morningTheme.svg'
import sunsetIcon from 'shared/assets/icons/sunsetTheme.svg'
import dayIcon from 'shared/assets/icons/dayTheme.svg'
import nightIcon from 'shared/assets/icons/nightTheme.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

interface IThemeSwitcher {
	className?: string
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
	const { theme, changeTheme } = useTheme()
	return (
		<div className={classNames(classes.switcher, {}, [className])}>
			<Button
				onClick={() => {
					changeTheme(Theme.DAY)
				}}
				theme={ThemeButton.OUTLINED}
			>
				<img src={dayIcon} alt='Дневная тема' />
				Day
			</Button>

			<Button
				onClick={() => {
					changeTheme(Theme.MORNING)
				}}
				theme={ThemeButton.PRIMARY}
			>
				<img src={morningIcon} alt='Утренняя тема' />
				Morning
			</Button>
			<Button
				onClick={() => {
					changeTheme(Theme.NIGHT)
				}}
				theme={ThemeButton.PRIMARY}
			>
				<img src={nightIcon} alt='Ночная тема' />
				Night
			</Button>
			<Button
				onClick={() => {
					changeTheme(Theme.SUNSET)
				}}
				theme={ThemeButton.PRIMARY}
			>
				<img src={sunsetIcon} alt='Вечерняя тема' />
				Sunset
			</Button>
		</div>
	)
}

export { ThemeSwitcher }
