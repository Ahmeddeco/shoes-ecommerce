import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cardContent } from '@/constants/cardContent'

export default function DashboardPage() {
	return (
		<>
			<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
				{cardContent.map(({ CardIcon, cardTitle, iconColor, id, p1, p2 }) => (
					<Card key={id}>
						<CardHeader className='flex flex-row items-center justify-between pb-2'>
							<CardTitle className='capitalize'>{cardTitle}</CardTitle>
							<CardIcon className={`h-4 w-4 ${iconColor}`} />
						</CardHeader>
						<CardContent>
							<p className='text-2xl font-bold capitalize'>{p1}</p>
							<p className='text-xs text-muted-foreground capitalize'>{p2}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	)
}
