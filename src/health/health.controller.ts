import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthDto } from 'src/dto/health.dto';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @Get()
  status() {
    const healthStatus: HealthDto = {
      status: 'ok',
    };

    return healthStatus;
  }
}
