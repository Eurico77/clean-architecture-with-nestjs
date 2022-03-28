import { Module } from "@nestjs/common";
import { HomePageUseCaseModule } from "src/domain/use-cases/page-home.module";
import { HomePageResolver } from "./page-home.resolver";

@Module({
  imports: [
    HomePageUseCaseModule
  ],
  exports: [
    HomePageResolver
  ],
  providers: [HomePageResolver, HomePageUseCaseModule],
})

export class HomePageModule {}