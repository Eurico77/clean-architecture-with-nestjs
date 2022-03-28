import { Meta } from "../types/meta"

export interface BasePage  {
  id: string
  heading: string
  metadata: Meta
  createdAt: string
  publishedAt: string
  updatedAt: string
}