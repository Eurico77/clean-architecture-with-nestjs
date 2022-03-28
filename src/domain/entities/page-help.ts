import { BasePage } from "./shared/base"
import { Faq } from "./shared/types/faq"
import { Meta } from "./shared/types/meta"

export interface HelpPage extends BasePage {
  subHeading: string
  faq: Faq[]
  meta: Meta
}