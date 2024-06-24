import { FC } from 'react'
import './App.scss'
import 'app/styles/index.scss'
import { useTheme } from './providers/theme'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

const App: FC = () => {
	const { theme, changeTheme } = useTheme()

	return (
		<div className={classNames('App', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
