import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { ContactsPage } from 'pages/Contacts'
import { routesConfig } from 'shared/config/routes/routesConfig'

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<h1>...Loading...</h1>}>
			<Routes>
				{Object.values(routesConfig).map(el => {
					return <Route key={el.path} path={el.path} element={el.element} />
				})}
			</Routes>
		</Suspense>
	)
}

export { AppRouter }
