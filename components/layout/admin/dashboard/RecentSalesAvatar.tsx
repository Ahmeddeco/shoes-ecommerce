import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { RecentSalesAvatarDataType } from '@/constants/RecentSalesAvatarData'
import React from 'react'

const RecentSalesAvatar = ({
	avatarImg,
	email,
	id,
	name,
	price,
}: RecentSalesAvatarDataType) => {
	return (
		<>
			<Avatar className='hidden sm:flex h-9 w-9'>
				<AvatarFallback>{avatarImg}</AvatarFallback>
			</Avatar>
			<div className='grid gap-1'>
				<p className='capitalize text-sm font-medium'>{name}</p>
				<p className='text-sm text-muted-foreground'>{email}</p>
			</div>
			<p className='ml-auto font-medium'>+${price}</p>
		</>
	)
}

export default RecentSalesAvatar
