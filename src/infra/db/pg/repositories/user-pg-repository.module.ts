import { UserPgRepo } from '@/infra/db/pg/repositories'

import { Module } from '@nestjs/common'

@Module({
  providers: [UserPgRepo],
  exports: [UserPgRepo]
})
export class UserReposModule {}