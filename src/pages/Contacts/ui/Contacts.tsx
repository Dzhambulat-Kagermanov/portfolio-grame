import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Contacts: FC = () => {
  const { t } = useTranslation('contacts')
  return (
    <div className="Contacts">
      <h1>{t('contacts')}</h1>
    </div>
  )
}

export default Contacts
