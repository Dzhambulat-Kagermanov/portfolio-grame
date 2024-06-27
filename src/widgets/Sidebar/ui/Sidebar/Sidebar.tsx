import { FC, useState } from 'react'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames'
import collapseArrow from 'shared/assets/icons/collapse-arrow.svg'
import { LangSwitcher } from 'widgets/LangSwitcher'
import classes from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <div
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        [className],
      )}
    >
      <Button
        onClick={() => {
          setCollapsed(prev => !prev)
        }}
        theme={ThemeButton.OUTLINED}
        className={classNames(classes.collapseBtn, {
          [classes.collapseBtnActive]: collapsed,
        })}
      >
        <img src={collapseArrow} alt="Развернуть" />
      </Button>
      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}

export { Sidebar }
