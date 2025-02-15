import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { MoreHorizontal, PlusCircle, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
	return (
		<>
			<div className='flex items-center justify-end'>
				<Button asChild>
					<Link href={'/dashboard/products/create'}>
						<PlusCircle />
						Add Product
					</Link>
				</Button>
			</div>
			<Card className='mt-5'>
				<CardHeader>
					<CardTitle>Products</CardTitle>
					<CardDescription>
						Manage your products and view their sales performance
					</CardDescription>
				</CardHeader>
				<CardContent>
					{/* ---------------------------------- Table --------------------------------- */}
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='capitalize w-[100px]'>image</TableHead>
								<TableHead className='capitalize'>name</TableHead>
								<TableHead className='capitalize'>status</TableHead>
								<TableHead className='capitalize'>price</TableHead>
								<TableHead className='capitalize'>date</TableHead>
								<TableHead className='capitalize text-end'>actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<UserIcon className='size-16' />
								</TableCell>
								<TableCell className='capitalize'>nike air</TableCell>
								<TableCell className='capitalize'>active</TableCell>
								<TableCell className='capitalize'>{`$156.00`}</TableCell>
								<TableCell className='capitalize'>16/2/2024</TableCell>
								<TableCell className='capitalize text-end'>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button size={'icon'} variant={'ghost'}>
												<MoreHorizontal className='size-4' />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align='end'>
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>Edit</DropdownMenuItem>
											<DropdownMenuItem>Delete</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	)
}
