import { FC } from 'react'
import { Theme, useTheme } from 'app/providers/theme'

import { classNames } from 'shared/lib/classNames'
import morningIcon from 'shared/assets/icons/theme/morningTheme.svg'
import sunsetIcon from 'shared/assets/icons/theme/sunsetTheme.svg'
import dayIcon from 'shared/assets/icons/theme/dayTheme.svg'
import nightIcon from 'shared/assets/icons/theme/nightTheme.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import classes from './ThemeSwitcher.module.scss'

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
        theme={ThemeButton.CLEAR}
      >
        <div className={classNames(classes.btnImg, {}, [])}>
          <img src={dayIcon} alt="Дневная тема" />
        </div>
        Day
      </Button>

      <Button
        onClick={() => {
          changeTheme(Theme.MORNING)
        }}
        theme={ThemeButton.CLEAR}
      >
        <div className={classNames(classes.btnImg, {}, [])}>
          <img src={morningIcon} alt="Утренняя тема" />
        </div>
        Morning
      </Button>
      <Button
        onClick={() => {
          changeTheme(Theme.NIGHT)
        }}
        theme={ThemeButton.CLEAR}
      >
        <div className={classNames(classes.btnImg, {}, [])}>
          <img src={nightIcon} alt="Ночная тема" />
        </div>
        Night
      </Button>
      <Button
        onClick={() => {
          changeTheme(Theme.SUNSET)
        }}
        theme={ThemeButton.CLEAR}
      >
        <div className={classNames(classes.btnImg, {}, [])}>
          <img src={sunsetIcon} alt="Вечерняя тема" />
        </div>
        Sunset
      </Button>
    </div>
  )
}

export { ThemeSwitcher }
