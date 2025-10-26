import { Module } from '@nestjs/common';
import { TeaService } from './tea.service';
import { TeaController } from './tea.controller';

@Module({
  providers: [TeaService],
  controllers: [TeaController]
})
export class TeaModule {}
