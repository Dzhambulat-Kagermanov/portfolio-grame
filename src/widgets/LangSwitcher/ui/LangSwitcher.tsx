import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import languageImg from 'shared/assets/icons/language.svg'
import classes from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
  className?: string
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()
  return (
    <div className={classNames(classes.lang, {}, [className])}>
      <Button
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }}
        className={classes.langBtn}
        theme={ThemeButton.CLEAR}
      >
        <img src={languageImg} alt="язык" />
        {t('lang')}
      </Button>
    </div>
  )
}

export { LangSwitcher }
