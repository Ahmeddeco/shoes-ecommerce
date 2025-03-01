import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import UploadThings from '@/components/layout/admin/UploadThings'
import { ChevronLeft } from 'lucide-react'
import Form from 'next/form'
import Link from 'next/link'

export default function CreateProductPage() {
	return (
		<Form action={''}>
			<div className='flex items-center gap-4'>
				<Button variant={'outline'} size={'icon'} asChild>
					<Link href={'/dashboard/products'}>
						<ChevronLeft className='size-4' />
					</Link>
				</Button>
				<h1 className='capitalize text-xl font-semibold tracking-tight'>
					new product
				</h1>
			</div>
			<Card className='mt-8'>
				<CardHeader>
					<CardTitle>Product Details</CardTitle>
					<CardDescription>
						In this form you can create your product
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col gap-6'>
						<div className='flex flex-col gap-3'>
							<Label>Name</Label>
							<Input
								type='text'
								placeholder='Product Name'
								className='w-full'
							/>
						</div>
						<div className='flex flex-col gap-3'>
							<Label>Description</Label>
							<Textarea placeholder='Write your description fight here...' />
						</div>
						<div className='flex flex-col gap-3'>
							<Label>Price</Label>
							<Input type='number' placeholder='$55' className='w-full' />
						</div>
						<div className='flex flex-col gap-3'>
							<Label>Featured Product</Label>
							<Switch />
						</div>
						<div className='flex flex-col gap-3'>
							<Label>Status</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder='Select Status' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value={'draft'}>Draft</SelectItem>
									<SelectItem value={'puplished'}>Puplished</SelectItem>
									<SelectItem value={'archived'}>Archived</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='flex flex-col gap-3'>
							<Label>Images</Label>
							<UploadThings />
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<Button>Create Product</Button>
				</CardFooter>
			</Card>
		</Form>
	)
}
