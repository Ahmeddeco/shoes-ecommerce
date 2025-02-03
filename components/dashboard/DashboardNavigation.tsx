'use client'

import { links } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardNavigation = () => {
	const pathname = usePathname()

	return (
		<>
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className={`${
						link.href === pathname
							? 'text-foreground'
							: 'text-muted-foreground hover:text-foreground'
					}
					`}
				>
					{link.name}
				</Link>
			))}
		</>
	)
}

export default DashboardNavigation
