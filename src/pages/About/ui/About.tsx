import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const About: FC = () => {
  const { t } = useTranslation('about')
  return (
    <div className="About">
      <h1>{t('about')}</h1>
    </div>
  )
}

export default About
