import PropTypes from 'prop-types'
import React from 'react'

// Función para renderizar contenido con formato
const renderFormattedContent = (content) => {
	const markdownPatterns = [
		{ regex: /\*\*(.*?)\*\*/, component: 'strong' },
		{ regex: /\*(.*?)\*/, component: 'em' },
		{ regex: /_(.*?)_/, component: 'u' },
	]

	return content.split('\n').map((line, lineIndex) => (
		<React.Fragment key={lineIndex}>
			<p>
				{line.split(/(\*\*.*?\*\*|\*.*?\*|_.*?_)/g).map((segment, segmentIndex) => {
					for (const { regex, component } of markdownPatterns) {
						if (regex.test(segment)) {
							const Component = component
							return <Component key={segmentIndex}>{segment.replace(regex, '$1')}</Component>
						}
					}
					return <span key={segmentIndex}>{segment}</span>
				})}
			</p>
		</React.Fragment>
	))
}

// Componente funcional para renderizar contenido
const ContentRenderer = ({ data, level = 1 }) => {
	// Función para obtener la clase CSS del título según el nivel
	const getTitleClass = (level) => {
		switch (level) {
			case 1:
				return 'text-2xl md:text-4xl'
			case 2:
				return 'text-lg md:text-2xl'
			case 3:
				return 'text-base md:text-xl'
			default:
				return 'text-base md:text-xl'
		}
	}

	return (
		<div>
			{/* Iterar sobre los datos y renderizar cada item */}
			{data?.map((item, index) => (
				<div key={index} className='mb-2'>
					<div className='flex flex-col md:flex-row justify-between items-center my-4'>
						{/* Renderizar título e imagen si existe */}
						{item.img ? (
							<>
								<h1 className={`${getTitleClass(level)} font-bold`}>
									{item.title}
								</h1>
								<img src={item.img} alt='' className='w-full md:w-3/5 rounded-lg' />
							</>
						) : (
							<h1 className={`${getTitleClass(level)} mt-4 font-bold`}>
								{item.title}
							</h1>
						)}
					</div>
					{/* Renderizar contenido con formato */}
					{renderFormattedContent(item.content)}
			
					{/* Renderizar imagen de contenido si existe */}
					{item.imgContent && (
						<div className='flex justify-center mt-2'>
							<img src={item.imgContent} alt='' className='w-full md:max-w-2xl' />
						</div>
					)}
					{/* Renderizar subcontenido recursivamente */}
					{item.subContent && (
						<ContentRenderer data={item.subContent} level={level + 1} />
					)}
				</div>
			))}
		</div>
	)
}

// Definición de PropTypes para el componente
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
