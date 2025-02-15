import DashboardHeader from '@/components/layout/admin/dashboard/DashboardHeader'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	if (!user || user.email !== process.env.SUPER_ADMIN_EMAIL) {
		return redirect('/')
	}

	return (
		<div className='flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
			<DashboardHeader />
			<main className='my-5'>{children}</main>
		</div>
	)
}
