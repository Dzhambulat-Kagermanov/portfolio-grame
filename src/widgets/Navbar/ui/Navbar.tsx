import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import RouterLink from 'shared/ui/RouterLink/RouterLink'
import { useTranslation } from 'react-i18next'
import classes from './Navbar.module.scss'

interface INavbar {
  className?: string
}

export const Navbar: FC<INavbar> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classNames(classes.links)}>
        <RouterLink to="/">{t('navbar-link-home')}</RouterLink>
        <RouterLink to="/about">{t('navbar-link-about')}</RouterLink>
        <RouterLink to="/contacts">{t('navbar-link-contacts')}</RouterLink>
      </div>
    </div>
  )
}
