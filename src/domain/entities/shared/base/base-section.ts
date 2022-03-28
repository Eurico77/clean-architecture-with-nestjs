import { Benefit, Drugstore, Step } from "../types"
import { ExamTable, SpecialtyTable } from "./base-table"

export interface BaseSection  {
  heading: string
  subHeading: string
}

export interface BannerSection extends BaseSection {
  minPrice: number
  videoUrl: string
}

export interface BenefitsSection extends BaseSection {
  benefits: Benefit[]
}

export interface HowItWorksSection extends BaseSection {
  minPrice: number
  steps: Step[]
}
export type SubscriptionsSection = BaseSection

export interface PricesSection extends BaseSection {
  specialtiesHeading: string
  specialties: SpecialtyTable[]
  examsHeading: string
  exams: ExamTable[]
}

export interface DrugstoresSection extends BaseSection {
  drugstores: Drugstore[]
}

export interface TelemedicineSection extends BaseSection {
  minPrice: number
  features: string[]
}

