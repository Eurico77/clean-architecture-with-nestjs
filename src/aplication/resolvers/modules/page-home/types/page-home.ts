import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

import {
  BannerSection,
  BenefitsSection,
  HowItWorksSection,
  BaseSection,
  PricesSection,
  DrugstoresSection,
  TelemedicineSection,
  BaseTable,
} from 'src/domain/entities/shared/base';

import {
  Benefit,
  Drugstore,
  Image,
  Meta,
  Step,
} from 'src/domain/entities/shared/types';

import { HomePage } from '../../../../../domain/entities';

@ObjectType()
export class BannerSectionType implements BannerSection {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  minPrice: number;

  @Field()
  videoUrl: string;

  @Field()
  heading: string;

  @Field()
  subHeading: string;
}

@ObjectType()
export class ImageType implements Image {
  @Field()
  url: string;

  @Field()
  alternativeText: string;
}

@ObjectType()
export class BenefitType implements Benefit {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => ImageType)
  image: ImageType;
}

@ObjectType()
export class BenefitsSectionType implements BenefitsSection {
  @Field(() => [BenefitType])
  benefits: BenefitType[];

  @Field()
  heading: string;

  @Field()
  subHeading: string;

  @Field(() => ID)
  id: string;
}

@ObjectType()
export class StepType implements Step {
  @Field()
  name: string;

  @Field()
  description: string;
}

@ObjectType()
export class HowItWorksSectionType implements HowItWorksSection {
  @Field(() => Float)
  minPrice: number;

  @Field(() => [StepType])
  steps: StepType[];

  @Field()
  heading: string;

  @Field()
  subHeading: string;
}

@ObjectType()
export class BaseSectionType implements BaseSection {
  @Field()
  heading: string;
  @Field()
  subHeading: string;
}

@ObjectType()
export class BaseTableType implements BaseTable {
  @Field()
  name: string;

  @Field()
  privateNetwork: number;

  @Field()
  vidaV: number;
}

@ObjectType()
export class PricesSectionType implements PricesSection {
  @Field()
  specialtiesHeading: string;

  @Field(() => [BaseTableType])
  specialties: BaseTableType[];

  @Field()
  examsHeading: string;

  @Field(() => [BaseTableType])
  exams: BaseTableType[];

  @Field()
  heading: string;

  @Field()
  subHeading: string;
}

@ObjectType()
export class DrugstoreType implements Drugstore {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  image: ImageType;
}

@ObjectType()
export class DrugstoresSectionType implements DrugstoresSection {
  @Field(() => [DrugstoreType])
  drugstores: DrugstoreType[];

  @Field()
  heading: string;

  @Field()
  subHeading: string;
}

@ObjectType()
export class TelemedicineSectionType implements TelemedicineSection {
  @Field(() => Float)
  minPrice: number;

  @Field(() => [String])
  features: string[];

  @Field()
  heading: string;

  @Field()
  subHeading: string;
}

@ObjectType()
export class HomePageDto implements HomePage {
  @Field(() => ID)
  id: string;

  @Field(() => BannerSectionType)
  bannerSection: BannerSectionType;

  @Field(() => BenefitsSectionType)
  benefitsSection: BenefitsSectionType;

  @Field(() => HowItWorksSectionType)
  howItWorksSection: HowItWorksSectionType;

  @Field(() => BaseSectionType)
  subscriptionsSection: BaseSectionType;

  @Field(() => PricesSectionType)
  pricesSection: PricesSectionType;

  @Field(() => DrugstoresSectionType)
  drugstoresSection: DrugstoresSectionType;

  @Field(() => TelemedicineSectionType)
  telemedicineSection: TelemedicineSectionType;

  @Field()
  heading: string;

  metadata: Meta;

  @Field()
  createdAt: string;

  @Field()
  publishedAt: string;

  @Field()
  updatedAt: string;
}
