import { dashboardLinks } from '@/constants/DashboardNavigationLinks'
import Link from 'next/link'
import React from 'react'

const DashboardNavigation = () => {
	return (
		<>
			{dashboardLinks.map((link) => (
				<Link
					href={link.href}
					key={link.href}
					className='capitalize font-medium md:font-semibold'
				>
					{link.name}
				</Link>
			))}
		</>
	)
}

export default DashboardNavigation
