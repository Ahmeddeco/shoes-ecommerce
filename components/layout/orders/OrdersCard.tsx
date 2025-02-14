import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import React from 'react'

const OrdersCard = () => {
	return (
		<Card>
			<CardHeader className=''>
				<CardTitle className='capitalize'>orders</CardTitle>
				<CardDescription className='capitalize'>
					Recent orders feom your store!
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className='capitalize'>customer</TableHead>
							<TableHead className='capitalize'>type</TableHead>
							<TableHead className='capitalize'>status</TableHead>
							<TableHead className='capitalize'>date</TableHead>
							<TableHead className='capitalize text-right'>amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>
								<p className='md:font-medium font-normal capitalize'>
									ahmed mohamed
								</p>
								<p className='hidden md:flex text-sm text-muted-foreground'>
									ahmed_mohamed@email.com
								</p>
							</TableCell>
							<TableCell className='capitalize'>sale</TableCell>
							<TableCell className='capitalize'>successfull</TableCell>
							<TableCell className='capitalize'>2025-02-06</TableCell>
							<TableCell className='capitalize text-right'>$250.00</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}

export default OrdersCard
