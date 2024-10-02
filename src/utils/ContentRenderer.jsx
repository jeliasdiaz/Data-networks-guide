import PropTypes from 'prop-types'

const ContentRenderer = ({ data, level = 1 }) => {
	const getTitleClass = (level) => {
		switch (level) {
			case 1:
				return 'text-4xl'
			case 2:
				return 'text-2xl'
			case 3:
				return 'text-xl'
			default:
				return 'text-xl'
		}
	}

	return (
		<div>
			{data?.map((item, index) => (
				<div key={index} className='mb-4'>
					<div className='flex justify-between items-center'>
						{item.img ? (
							<>
								<h1 className={`${getTitleClass(level)} font-bold`}>
									{item.title}
								</h1>
								<img src={item.img} alt='' className='w-3/5' />
							</>
						) : (
							<h1 className={`${getTitleClass(level)} mt-10 font-bold`}>
								{item.title}
							</h1>
						)}
					</div>
					{item.content.split('\n').map((line, lineIndex) => (
						<>
							<p key={lineIndex}>{line}</p>
							<br />
						</>
					))}
					{item.imgContent && (
						<div className='flex justify-center'>
							<img src={item.imgContent} alt='' className='w-3/5' />
						</div>
					)}
					{item.subContent && (
						<ContentRenderer data={item.subContent} level={level + 1} />
					)}
				</div>
			))}
		</div>
	)
}

ContentRenderer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			img: PropTypes.string,
			imgContent: PropTypes.string,
			content: PropTypes.string.isRequired,
			subContent: PropTypes.array,
		})
	).isRequired,
	level: PropTypes.number,
}

export default ContentRenderer
