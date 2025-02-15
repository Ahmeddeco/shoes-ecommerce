import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingLoading() {
	// Or a custom loading skeleton component
	return (
		<div className='flex flex-col space-y-3 h-screen items-center justify-center'>
			<Skeleton className='h-[125px] w-[250px] rounded-xl' />
			<div className='space-y-2'>
				<Skeleton className='h-4 w-[250px]' />
				<Skeleton className='h-4 w-[200px]' />
			</div>
		</div>
	)
}
