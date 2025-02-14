import DashboardCard from '@/components/layout/dashboard/DashboardCard'
import RecentSalesAvatar from '@/components/layout/dashboard/RecentSalesAvatar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { RecentSalesAvatarData } from '@/constants/RecentSalesAvatarData'

export default function DashboardPage() {
	return (
		<>
			<DashboardCard />
			<section className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10'>
				<Card className='xl:col-span-2'>
					<CardHeader>
						<CardTitle>Transactions</CardTitle>
						<CardDescription>
							Recent transactions from your store
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className=''>
					<CardHeader>
						<CardTitle>Recent Sales</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-col gap-8'>
						{RecentSalesAvatarData.map(
							({ avatarImg, email, id, name, price }) => (
								<div className='flex items-center gap-4' key={id}>
									<RecentSalesAvatar
										id={id}
										name={name}
										avatarImg={avatarImg}
										email={email}
										price={price}
									/>
								</div>
							)
						)}
					</CardContent>
				</Card>
			</section>
		</>
	)
}
