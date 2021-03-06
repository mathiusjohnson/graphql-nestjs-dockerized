// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    DatabaseModule,
  ],
  providers: [
    UserService,
    UserResolver,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class AppModule {}
