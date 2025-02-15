'use client'

import { UploadDropzone } from '@/utils/uploadthing'
import React from 'react'

const UploadThings = () => {
	return (
		<>
			<UploadDropzone
				endpoint={'imageUploader'}
				onClientUploadComplete={(res) => {
					alert('Upload Completed')
				}}
				onUploadError={(error: Error) =>
					alert(`Something Went Worng! ${error.message}`)
				}
			/>
		</>
	)
}

export default UploadThings
