import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col gap-4 items-center justify-center h-screen'>
			<h1 className='font-bold text-4xl uppercase'>Not Found</h1>
			<p className='text-xl font-semibold'>Could not find requested resource</p>
			<Button asChild>
				<Link href='/'>Return Home</Link>
			</Button>
		</div>
	)
}
