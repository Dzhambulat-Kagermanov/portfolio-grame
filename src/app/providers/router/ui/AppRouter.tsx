import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routes/routesConfig'

const AppRouter: FC = () => (
  <Suspense fallback={<h1>...Loading...</h1>}>
    <Routes>
      {Object.values(routesConfig).map(el => (
        <Route
          key={el.path}
          path={el.path}
          element={<div className="App__pageWrapper">{el.element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
)

export { AppRouter }
