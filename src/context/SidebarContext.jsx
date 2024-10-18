import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}

SidebarProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
