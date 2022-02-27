import Link from 'next/link'
import classes from './Sidebar.module.scss'
import { useRouter } from 'next/router'
import Home from '@/public/icon/Home.svg'
import HomeActive from '@/public/icon/HomeActive.svg'
import Search from '@/public/icon/Search.svg'
import SearchActive from '@/public/icon/SearchActive.svg'
import Library from '@/public/icon/Library.svg'
import LibraryActive from '@/public/icon/LibraryActive.svg'
import Plus from '@/public/icon/Plus.svg'
import HeartFill from '@/public/icon/HeartFill.svg'
import Spotify from '@/public/icon/Spotify.svg'

const Sidebar = () => {
	const router = useRouter()
	const links = [
		{
			href: '/',
			name: 'Home',
			active: <HomeActive className={classes['active-svg']} />,
			icon: <Home />,
			id: 1
		},
		{
			href: '/search',
			name: 'search',
			active: <SearchActive className={classes['active-svg']} />,
			icon: <Search />,
			id: 2
		},
		{
			href: '/collection/playlist',
			name: 'Your Library',
			active: <LibraryActive className={classes['active-svg']} />,
			icon: <Library />,
			id: 3
		}
	]
	return (
		<nav className={classes.side}>
			<div className={classes['sidebar-header']}>
				<Spotify className={classes.active} />
			</div>
			<ul>
				{links.map(data => (
					<li key={data.id} className={data.href === router.pathname ? classes.active : ''}>
						{data.href === router.pathname ? data.active : data.icon}
						<Link href={data.href}>
							<a>{data.name}</a>
						</Link>
					</li>
				))}
			</ul>
			<ul>
				<li>
					<div className={`${classes['wrapper-icon']} ${classes['wrapper-plus']}`}>
						<Plus />
					</div>
					Create Playlist
				</li>
				<li className='sidebar-action-item'>
					<div className={`${classes['wrapper-icon']} ${classes['wrapper-heart']}`}>
						<HeartFill />
					</div>
					Liked Song
				</li>
			</ul>
			<hr className={classes.border} />
			<ul className={classes['sidebar-playLists']}>
				<li>My play list #1</li>
				<li>My play list #2</li>
			</ul>
		</nav>
	)
}

export default Sidebar
