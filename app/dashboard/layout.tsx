import DashboardHeader from '@/components/layout/dashboard/DashboardHeader'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
			<DashboardHeader />
			{children}
		</div>
	)
}
