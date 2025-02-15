import React from 'react'
import DaahboardNavigation from './DashboardNavigation'
import DashboardNavigation from './DashboardNavigation'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { CircleUser, MenuIcon } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

const DashboardHeader = () => {
	return (
		<header className='sticky top-0 flex h-16 items-center justify-between gap-4  border-b bg-white'>
			<nav className='hidden font-medium md:flex items-center md:text-sm md:gap-5 lg:gap-6'>
				<DashboardNavigation />
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant={'outline'}
						size={'icon'}
						className='shrink-0 md:hidden'
					>
						<MenuIcon className='h-5 w-5' />
					</Button>
				</SheetTrigger>
				<SheetContent side={'left'}>
					<SheetTitle className='uppercase'>menu</SheetTitle>
					<nav className='flex flex-col gap-6 font-medium mt-5'>
						<DaahboardNavigation />
					</nav>
				</SheetContent>
			</Sheet>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'secondary'} className='rounded-full' size={'icon'}>
						<CircleUser className='w-5 h-5' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<LogoutLink>Logout</LogoutLink>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	)
}

export default DashboardHeader
