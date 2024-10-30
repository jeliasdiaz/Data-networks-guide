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
import { ServiciosBasicos } from './pages/Conceptos-basicos/ServiciosBasicos'
import { OtrosConceptos } from './pages/Conceptos-basicos/OtrosConceptos'
import { Protocolos } from './pages/ArquitecturaRed/Protocolos'
import { CapaFisica } from './pages/CaracteristicasCapas/CapaFisica'
import { CapaEnlace } from './pages/CaracteristicasCapas/CapaEnlace'
import { CapaInternet } from './pages/CaracteristicasCapas/CapaInternet'
import { ModelosReferencia } from './pages/ArquitecturaRed/ModelosReferencia'
import { ArquitecturaRed } from './pages/ArquitecturaRed/ArquitecturaRed'
import { QuizArquitecturaRed } from './pages/ArquitecturaRed/QuizArquitecturaRed'
import { QuizCaracteristicasCapas } from './pages/CaracteristicasCapas/QuizCaracteristicasCapas'
import { Ejemplo } from './pages/CarpetaEjemplo/Ejemplo'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<div className='flex h-screen' style={{ display: 'flex' }}>
					<div className='md:w-1/4'>
						<SideBar />
					</div>
					<div className='w-full px-5 md:px-0 md:w-3/4'>
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
								path='/conceptos-basicos/servicios'
								element={<ServiciosBasicos />}
							/>
							<Route
								path='/conceptos-basicos/otros-conceptos'
								element={<OtrosConceptos />}
							/>
							<Route
								path='/conceptos-basicos-quiz'
								element={<QuizConceptosBasicos />}
							/>
							<Route
								path='/arquitectura-red/que-es-una-arquitectura-red'
								element={<ArquitecturaRed />}
							/>
							<Route
								path='/arquitectura-red/protocolos'
								element={<Protocolos />}
							/>
							<Route
								path='/arquitectura-red/modelos-de-referencia'
								element={<ModelosReferencia />}
							/>
							<Route
								path='/caracteristicas-capas/capa-fisica'
								element={<CapaFisica />}
							/>
							<Route
								path='/caracteristicas-capas/capa-enlace'
								element={<CapaEnlace />}
							/>
							<Route
								path='/caracteristicas-capas/capa-internet'
								element={<CapaInternet />}
							/>
							<Route
								path='/arquitectura-red/quiz'
								element={<QuizArquitecturaRed />}
							/>
							<Route
								path='/caracteristicas-capas/quiz'
								element={<QuizCaracteristicasCapas />}
							/>
							<Route
								path='/ejemplourl/Ejemplo'
								element={<Ejemplo />}
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
