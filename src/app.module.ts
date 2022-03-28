import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HomePageModule } from './aplication/resolvers/modules/page-home/page-home.module';
import { HomePageUseCaseModule } from './domain/use-cases/page-home.module';
import { StrapiModule } from './infra/gateways/strapi/strapi.module';
import { ApolloDriver} from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/infra/graphql/schema.gql'),
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
    }),
    HomePageModule,
    HomePageUseCaseModule,
    StrapiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
