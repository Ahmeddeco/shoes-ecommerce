import React from 'react'
import DaahboardNavigation from './DashboardNavigation'
import DashboardNavigation from './DashboardNavigation'

const DashboardHeader = () => {
	return (
		<header className='sticky top-0 flex h-16 items-center justify-between gap-4  border-b bg-white'>
			<nav className='hidden font-medium md:flex items-center md:text-sm md:gap-5 lg:gap-6'>
				<DashboardNavigation />
			</nav>
		</header>
	)
}

export default DashboardHeader
