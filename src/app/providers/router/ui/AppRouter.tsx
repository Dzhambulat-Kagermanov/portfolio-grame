import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routes/routesConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: FC = () => (
  <Routes>
    {Object.values(routesConfig).map(el => (
      <Route
        key={el.path}
        path={el.path}
        element={(
          <div className="App__pageWrapper">
            <Suspense fallback={<PageLoader />}>{el.element}</Suspense>
          </div>
        )}
      />
    ))}
  </Routes>
)

export { AppRouter }
