'use server'

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { parseWithZod } from '@conform-to/zod'
import { ProductSchema } from "@/prisma/zod"

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/')
  }

  const submission = parseWithZod(formData, {
    schema: ProductSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }
}
