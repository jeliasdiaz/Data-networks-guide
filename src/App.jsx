import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Introduccion, Welcome } from './pages'
import { SideBar } from './components/SideBar'
import { BottomNavigation } from './components/'
import { QueEsRedesDatos } from './pages/Conceptos-basicos/QueEsRedesDatos'
import ScrollToTop from './ScrollToTop'
import "boxicons"
function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<div className='flex h-screen' style={{ display: 'flex' }}>
					<div className="md:w-1/4">
						<SideBar />
					</div>
					<div className="w-full px-5 md:px-14 md:w-3/4">
						<Routes location={location}>
							<Route path='/' element={<Welcome />} />
							<Route path='/introduccion' element={<Introduccion />} />
							<Route
								path='/conceptos-basicos/que-es-una-red-de-datos'
								element={<QueEsRedesDatos />}
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
