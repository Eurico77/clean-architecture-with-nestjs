import { Query, Resolver } from '@nestjs/graphql';
import { GetHomePageUseCase } from 'src/domain/use-cases/get-home-page.usecase';
import { HomePageDto } from './types/page-home';

@Resolver(() => HomePageDto)
export class HomePageResolver {
  constructor(private readonly getHomePageUseCase: GetHomePageUseCase) {}

  @Query(() => HomePageDto)
  getHomePage(): Promise<HomePageDto> {
    return this.getHomePageUseCase.execute();
  }
}
