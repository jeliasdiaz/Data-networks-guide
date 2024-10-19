import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Introduccion, Welcome } from './pages'
import { SideBar } from './components/SideBar'
import { BottomNavigation } from './components/'
import ScrollToTop from './ScrollToTop'
import 'boxicons'
import {
	ComponentesFundamentalesEthernet,
	QueEsRedesDatos,
	TiposRedes,
	TiposTransmisionDatos,
} from './pages/Conceptos-basicos'
import { QuizConceptosBasicos } from './pages/Conceptos-basicos/QuizConceptosBasicos'
import { AltaDisponibilidad } from './pages/Conceptos-basicos/AltaDisponibilidad'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<div className='flex h-screen' style={{ display: 'flex' }}>
					<div className='md:w-1/4'>
						<SideBar />
					</div>
					<div className='w-full px-5 md:px-14 md:w-3/4'>
						<Routes location={location}>
							<Route path='/' element={<Welcome />} />
							<Route path='/introduccion' element={<Introduccion />} />
							<Route
								path='/conceptos-basicos/que-es-una-red-de-datos'
								element={<QueEsRedesDatos />}
							/>
							<Route
								path='/conceptos-basicos/tipos-de-redes-de-datos'
								element={<TiposRedes />}
							/>
							<Route
								path='/conceptos-basicos/tipos-de-transmision-de-datos'
								element={<TiposTransmisionDatos />}
							/>
							<Route
								path='/conceptos-basicos/componentes-fundamentales-ethernet'
								element={<ComponentesFundamentalesEthernet />}
							/>
							<Route
								path='/conceptos-basicos/alta-disponibilidad'
								element={<AltaDisponibilidad />}
							/>
							<Route
								path='/conceptos-basicos-quiz'
								element={<QuizConceptosBasicos />}
							/>
						</Routes>
						<BottomNavigation />
					</div>
				</div>
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default App
