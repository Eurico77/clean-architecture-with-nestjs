import { Injectable } from '@nestjs/common';
import { HomePageDto } from 'src/aplication/resolvers/modules/page-home/types/page-home';
import { Pages, StrapiClientService } from 'src/infra/gateways/strapi';

@Injectable()
export class GetHomePageUseCase {
  constructor(private clientService: StrapiClientService<HomePageDto>) {}

  async execute(): Promise<HomePageDto> {
    const homePage = await this.clientService.getPage(Pages.HomePage);
    return homePage;
  }
}
