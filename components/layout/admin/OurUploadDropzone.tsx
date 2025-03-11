'use client'

import { UploadDropzone } from '@/utils/uploadthing'

const OurUploadDropzone = () => {
	return (
		<UploadDropzone
			endpoint='imageUploader'
			onClientUploadComplete={(res) => {
				// Do something with the response
				alert('Upload Completed')
				console.log('Files: ', res)
			}}
			onUploadError={(error: Error) => {
				// Do something with the error.
				console.error(error.message)
				alert(`ERROR! ${error.message}`)
			}}
		/>
	)
}

export default OurUploadDropzone
