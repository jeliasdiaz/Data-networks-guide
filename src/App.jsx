import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Introduccion, Welcome } from './pages'
import { SideBar } from './components/SideBar'
import { BottomNavigation } from "./components/"
import { QueEsRedesDatos } from './pages/Conceptos-basicos/QueEsRedesDatos'

function App() {
	return (
		<BrowserRouter>
			<div className='flex h-screen' style={{ display: 'flex' }}>
				<div className='w-1/4'>
					<SideBar />
				</div>
				<div className='w-3/4 px-14'>
					<Routes location={location}>
						<Route path='/' element={<Welcome />} />
						<Route path='/introduccion' element={<Introduccion />} />
						<Route path='/conceptos-basicos/que-es-una-red-de-datos' element={<QueEsRedesDatos />} />

					</Routes>
			<BottomNavigation />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
