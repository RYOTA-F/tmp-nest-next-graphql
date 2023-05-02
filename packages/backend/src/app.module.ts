import { Module } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ConnpassModule } from './modules/connpass/connpass.module'
import { TaskModule } from './modules/task/task.module'
import { PrismaModule } from './modules/prisma/prisma.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConnpassModule,
    TaskModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
