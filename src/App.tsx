import { FC, Suspense, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeAsync } from './components/pages/Home/HomeAsync'
import { AboutAsync } from './components/pages/About/AboutAsync'
import { ContactsAsync } from './components/pages/Contacts/ContactsAsync'
import './App.scss'
import './components/styles/index.scss'
import { Theme, ThemeContext } from './context/theme/ThemeContext'
import useTheme from './hooks/useTheme'

const App: FC = () => {
	const { theme, changeTheme } = useTheme()

	return (
		<div className={`App ${theme}`}>
			<Suspense fallback={<h1>...Loading...</h1>}>
				<Routes>
					<Route path='/' element={<HomeAsync />} />
					<Route path='/about' element={<AboutAsync />} />
					<Route path='/contacts' element={<ContactsAsync />} />
				</Routes>
			</Suspense>
			<button
				style={{ margin: '0 20px 0 0' }}
				onClick={() => {
					changeTheme(Theme.NORMAL)
				}}
			>
				Normal
			</button>
			<button
				style={{ margin: '0 20px 0 0' }}
				onClick={() => {
					changeTheme(Theme.MORNING)
				}}
			>
				Morning
			</button>
			<button
				style={{ margin: '0 20px 0 0' }}
				onClick={() => {
					changeTheme(Theme.NIGHT)
				}}
			>
				Night
			</button>
			<button
				onClick={() => {
					changeTheme(Theme.SUNSET)
				}}
			>
				Sunset
			</button>
		</div>
	)
}

export default App
