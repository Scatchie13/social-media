import { PropsWithChildren } from 'react'
import Sidebar from './Sidebar/Sidebar'

import styles from './LayoutClient.module.scss'

const LayoutClient = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<main className={styles.layout}>
			<Sidebar />
			<section>{children}</section>
		</main>
	)
}

export default LayoutClient
