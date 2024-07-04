import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, HealthModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
