import Image from 'next/image'
import classes from './Card.module.scss'

const Card = ({ data, sizeImage, fontSize, height }) => {
	const { name, image, background } = data
	return (
		<div className={`${classes.card} wrapper rounded-1 position-relative overflow-hidden mb-3`}>
			<p className='text-light fw-bold  ps-2 pt-1 user-select-none'>{name}</p>
			<div className={`${classes.img} user-select-none position-absolute`}>
				<Image src={`/image/${image}.jpg`} alt={name} width={sizeImage} height={sizeImage} />
			</div>
			<style jsx>{`
				.wrapper {
					background-color: ${background};
					height: ${height};
				}
				p {
					font-size: ${fontSize};
				}
			`}</style>
		</div>
	)
}

export default Card
