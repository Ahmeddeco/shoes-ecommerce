'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className='flex items-center justify-center h-screen flex-col gap-8'>
			<h2 className='font-bold text-4xl'>Something went wrong!</h2>
			<div className='flex items-center justify-center gap-4'>
				<Button
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</Button>
				<Button asChild>
					<Link href={'/'}>Go home</Link>
				</Button>
			</div>
		</div>
	)
}
