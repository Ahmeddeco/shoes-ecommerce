import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import DashboardNavigation from './DashboardNavigation'

const DashboardMobileNavigation = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button className='shrink-0 md:hidden' variant='outline' size='icon'>
						<MenuIcon className='size-5' />
					</Button>
				</SheetTrigger>
				<SheetContent side={'left'}>
					<nav className='flex flex-col gap-6 text-lg font-medium mt-5'>
						<DashboardNavigation />
					</nav>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default DashboardMobileNavigation
