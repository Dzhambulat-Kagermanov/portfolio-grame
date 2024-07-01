import { FC, Suspense } from 'react'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { useTheme } from './providers/theme'
import { AppRouter } from './providers/router'

const App: FC = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('App', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="App__content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
