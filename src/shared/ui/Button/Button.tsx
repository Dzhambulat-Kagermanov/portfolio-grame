import { IChildrenProp } from 'app/types/reactChildren'
import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
	PRIMARY = 'primary',
	OUTLINED = 'outlined',
}
interface IButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		IChildrenProp {
	className?: string
	theme?: ThemeButton
}

const Button: FC<IButtonProps> = ({ children, className, theme, ...other }) => {
	return (
		<button
			className={classNames(classes.button, {}, [
				className,
				theme ? classes[theme] : classes[ThemeButton.PRIMARY],
			])}
			{...other}
		>
			{children}
		</button>
	)
}

export default Button
