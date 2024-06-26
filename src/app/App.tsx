import { FC } from 'react'
import 'app/styles/index.scss'
import { useTheme } from './providers/theme'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
	const { theme, changeTheme } = useTheme()

	return (
		<div className={classNames('App', {}, [theme])}>
			<Navbar />
			<div className='App__content'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
