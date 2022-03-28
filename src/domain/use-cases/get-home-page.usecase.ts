import { Injectable } from '@nestjs/common';
import { HomePageDto } from 'src/aplication/resolvers/modules/page-home/types/page-home';
import { StrapiClientService } from 'src/infra/gateways/strapi';
import { Pages } from 'src/infra/gateways/strapi/helpers';

@Injectable()
export class GetHomePageUseCase {
  constructor(private clientService: StrapiClientService<HomePageDto>) {}

  execute(): Promise<HomePageDto> {
    return this.clientService.getPage(Pages.HomePage);
  }
}
