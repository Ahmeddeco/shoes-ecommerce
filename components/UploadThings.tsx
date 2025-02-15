'use client'

import { UploadDropzone } from '@/utils/uploadthing'
import React from 'react'

const UploadThings = () => {
	return (
		<>
			<UploadDropzone endpoint={'imageUploader'} />
		</>
	)
}

export default UploadThings
