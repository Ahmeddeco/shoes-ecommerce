import { links } from '@/constants/links'
import Link from 'next/link'
import React from 'react'

const DashboardNavigation = () => {
	return (
		<>
			{links.map(({ href, name }, i) => (
				<Link href={href} key={i}>
					{name}
				</Link>
			))}
		</>
	)
}

export default DashboardNavigation
