import {
  BannerSection,
  BasePage,
  BenefitsSection,
  DrugstoresSection,
  HowItWorksSection,
  PricesSection,
  SubscriptionsSection,
  TelemedicineSection,
} from './shared/base';

export interface HomePage extends BasePage {
  bannerSection: BannerSection;
  benefitsSection: BenefitsSection;
  howItWorksSection: HowItWorksSection;
  subscriptionsSection: SubscriptionsSection;
  pricesSection: PricesSection;
  drugstoresSection: DrugstoresSection;
  telemedicineSection: TelemedicineSection;
};
