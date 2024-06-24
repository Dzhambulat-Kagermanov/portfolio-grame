import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Navbar.module.scss'
import RouterLink from 'shared/ui/RouterLink/RouterLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface INavbar {
	className?: string
}

export const Navbar: FC<INavbar> = ({ className }) => {
	return (
		<div className={classNames(classes.navbar, {}, [className])}>
			<ThemeSwitcher />
			<div className={classNames(classes.links)}>
				<RouterLink to={'/'}>Home</RouterLink>
				<RouterLink to={'/about'}>About</RouterLink>
				<RouterLink to={'/contacts'}>Contacts</RouterLink>
			</div>
		</div>
	)
}
