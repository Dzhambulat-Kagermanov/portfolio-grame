import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation('home')
  return (
    <div className="Home">
      <h1>{t('home')}</h1>
    </div>
  )
}

export default Home
