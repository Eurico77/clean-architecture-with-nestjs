import { Image } from "./shared/types"

export interface Specialty {
  id: string
  name: string
  description: string
  slug: string
  textContent: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  coverImage: Image
}