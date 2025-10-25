import { Module } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { CakesController } from './cakes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CakesController],
  providers: [CakesService, PrismaService],
})
export class CakesModule {}
