import { Module } from "@nestjs/common";
import { StrapiModule } from "src/infra/gateways/strapi/strapi.module";
import { GetHomePageUseCase } from './get-home-page.usecase';


@Module({
  imports: [
    StrapiModule
  ],
  exports: [
    GetHomePageUseCase,
  ],
  providers: [GetHomePageUseCase],
})

export class HomePageUseCaseModule {}