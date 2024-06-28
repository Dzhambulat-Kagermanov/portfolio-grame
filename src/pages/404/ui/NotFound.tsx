import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage: FC = () => {
  const { t } = useTranslation('notFound')
  return (
    <div className="NotFound">
      <h1>{t('notFound')}</h1>
    </div>
  )
}

export { NotFoundPage }
