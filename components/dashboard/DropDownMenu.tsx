import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { CircleUser } from 'lucide-react'
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const DropDownMenu = async () => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	// console.log(user)

	return (
		<>
			<DropdownMenu>
				{/* --------------------------- DropdownMenuTrigger -------------------------- */}
				<DropdownMenuTrigger asChild>
					<Button variant={'secondary'} size={'icon'} className='rounded-full'>
						{user ? (
							<div className='flex flex-col gap-1 items-center justify-center'>
								<Image
									src={user?.picture || '/default-picture.png'}
									alt={user?.username || 'default-username'}
									width={40}
									height={40}
									className='rounded-full flex items-center justify-center'
								/>
								<h6 className='capitalize text-xs'>{`hi ${user?.given_name}`}</h6>
							</div>
						) : (
							<CircleUser className='size-5' />
						)}
					</Button>
				</DropdownMenuTrigger>
				{/* --------------------------- DropdownMenuContent -------------------------- */}
				<DropdownMenuContent align='end'>
					{/* --------------------------- DropdownMenuLabel -------------------------- */}
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{/* --------------------------- DropdownMenuItem -------------------------- */}

					{!user ? (
						redirect('/')
					) : (
						// <>
						// <DropdownMenuItem>
						// <LoginLink>Sign in</LoginLink>
						// </DropdownMenuItem>
						// <DropdownMenuItem>
						// <RegisterLink>Sign up</RegisterLink>
						// </DropdownMenuItem>
						// </>

						<>
							<DropdownMenuItem>
								<LogoutLink>Log out</LogoutLink>
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

export default DropDownMenu
