'use client'

import { UploadButton } from '@/utils/uploadthing'

const OurUploadDropzone = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={(res) => {
					// Do something with the response
					console.log('Files: ', res)
					alert('Upload Completed')
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					console.error(error.message)
					alert(`ERROR! ${error.message}`)
				}}
			/>
		</main>
	)
}

export default OurUploadDropzone
