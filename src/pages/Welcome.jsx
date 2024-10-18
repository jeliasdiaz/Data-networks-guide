export const Welcome = () => {
	return (
		<div className='flex flex-col text-center items-center gap-y-10 mt-20'>
			<h1 className='text-xl font-bold'>
				¡Bienvenido al curso de Redes de datos!
			</h1>
			<div>
				<img
					src='/img/welcomeRedesDatos2.svg'
					alt='Imagen de bienvenida'
					className='w-72'
				/>
				<small>
					<i>De estudiantes para estudiantes</i>
				</small>
			</div>
			<p className='w-5/6'>
				Invitamos a todos los estudiantes a aprovechar la guía de Redes de Datos
				como una herramienta clave para reforzar sus conocimientos, adelantarse
				a los temas y repasar lo visto en clase. Con una estructura clara y
				organizada, este recurso les permitirá mejorar su comprensión y
				mantenerse un paso adelante en su aprendizaje académico.
			</p>
		</div>
	)
}
