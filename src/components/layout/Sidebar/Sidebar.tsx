import Image from 'next/image'

import { MessageSquare, Phone, Settings, User2 } from 'lucide-react'
import Link from 'next/link'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<Image priority src='/wakatime.svg' alt='' width={100} height={100} />
			<div>
				<Link href='/friends'>
					<User2 />
				</Link>
				<Link href='/call'>
					<Phone />
				</Link>
				<Link href='/chats'>
					<MessageSquare />
				</Link>
				<Link href='/settings'>
					<Settings />
				</Link>
			</div>
		</aside>
	)
}

export default Sidebar
