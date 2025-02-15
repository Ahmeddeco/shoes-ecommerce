'use client'

import { dashboardLinks } from '@/constants/DashboardNavigationLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardNavigation = () => {
	const pathName = usePathname()
	return (
		<>
			{dashboardLinks.map(({ href, name }) => (
				<Link
					href={href}
					key={href}
					className={`capitalize font-medium md:font-semibold ${
						pathName === href
							? 'text-foreground'
							: 'text-muted-foreground hover:text-foreground'
					}`}
				>
					{name}
				</Link>
			))}
		</>
	)
}

export default DashboardNavigation
