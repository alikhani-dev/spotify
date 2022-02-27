import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import classes from './Control.module.scss'
import Heart from '@/public/icon/Heart.svg'
import MultiView from '@/public/icon/MultiView.svg'
import Random from '@/public/icon/Random.svg'
import PreviousButton from '@/public/icon/PreviousButton.svg'
import Play from '@/public/icon/Play.svg'
import NextButton from '@/public/icon/NextButton.svg'
import Repeat from '@/public/icon/Repeat.svg'
import Microphone from '@/public/icon/Microphone.svg'
import Queue from '@/public/icon/Queue.svg'
import ConnectDevice from '@/public/icon/ConnectDevice.svg'
import VolumeMedium from '@/public/icon/VolumeMedium.svg'

const Control = () => {
	return (
		<Row className={`${classes.container} m-0 p-3 justify-content-between`}>
			<Col className={`${classes.left} d-none d-sm-block`} sm={2} lg={3}>
				<Row>
					<Col className='d-none d-lg-block' lg={4} xl={3}>
						<Image src='/image/control/1.jpg' width={56} height={56} alt='' />
					</Col>
					<Col className={` ${classes.information}`} xs={12} lg={6} xl={7}>
						<p className='m-0'>Por Hashiyeh - Deejay Al Remix</p>
						<p>
							<Link href='/'>
								<a>Anita ,</a>
							</Link>
							<Link href='/'>
								<a>Donya ,</a>
							</Link>
							<Link href='/'>
								<a>Deejay Al </a>
							</Link>
						</p>
					</Col>
					<Col className='d-none d-xl-block' xl={1}>
						<button className='btn'>
							<Heart />
						</button>
					</Col>
					<Col className='d-none d-xl-block' xl={1}>
						<button className='btn'>
							<MultiView />
						</button>
					</Col>
				</Row>
			</Col>
			<Col xs={12} sm={9} md={8} lg={6} className={classes.center}>
				<div className={`${classes.control} d-flex justify-content-center align-items-center mb-1`}>
					<button className='btn'>
						<Random />
					</button>
					<button className='btn'>
						<PreviousButton />
					</button>
					<button className='btn rounded-circle bg-light'>
						<Play className={classes.play} />
					</button>
					<button className='btn'>
						<NextButton />
					</button>
					<button className='btn'>
						<Repeat />
					</button>
				</div>
				<div className={`${classes.timeline} d-flex justify-content-around align-items-center`}>
					<span className='user-select-none'>0:20</span>
					<div className={`progress ${classes.progress} mx-3`}>
						<div
							className='progress-bar '
							role='progressbar'
							style={{ width: '25%' }}
							aria-valuenow='25'
							aria-valuemin='0'
							aria-valuemax='100'
						></div>
					</div>
					<span className='user-select-none'>3:20</span>
				</div>
			</Col>
			<Col sm={1} lg={3} className={`${classes.right} d-none d-sm-flex justify-content-end align-items-center`}>
				<button className='btn'>
					<Microphone />
				</button>
				<button className='btn'>
					<Queue />
				</button>
				<button className='btn'>
					<ConnectDevice />
				</button>
				<button className='btn'>
					<VolumeMedium />
				</button>
				<div className={`progress ${classes.progress} ms-2 mt-3`}>
					<div
						className='progress-bar'
						role='progressbar'
						style={{ width: '25%' }}
						aria-valuenow='25'
						aria-valuemin='0'
						aria-valuemax='100'
					></div>
				</div>
			</Col>
		</Row>
	)
}

export default Control
