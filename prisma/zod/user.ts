import * as z from "zod"

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  profileImage: z.string(),
  createdAt: z.date(),
})
