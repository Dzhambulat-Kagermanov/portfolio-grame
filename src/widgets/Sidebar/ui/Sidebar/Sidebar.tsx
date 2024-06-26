import { FC, useState } from 'react'
import classes from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'

interface ISidebarProps {
	className?: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	return (
		<div
			className={classNames(
				classes.sidebar,
				{ [classes.collapsed]: collapsed },
				[className]
			)}
		>
			<button
				onClick={() => {
					setCollapsed(prev => !prev)
				}}
				className={classNames(classes.collapseBtn)}
			>
				Toggle
			</button>
		</div>
	)
}

export { Sidebar }
