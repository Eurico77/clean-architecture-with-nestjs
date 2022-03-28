import { Question } from "./question"

export type Faq = {
  id: string
  name: string
  questions: Question[]
}
