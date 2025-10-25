import { Injectable } from '@nestjs/common';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CakesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCakeDto: CreateCakeDto) {
    // Pass the DTO directly to Prisma
    return this.prisma.cake.create({
      data: {
        email: createCakeDto.email,
        name: createCakeDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.cake.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} cake`;
  }

  update(id: number, updateCakeDto: UpdateCakeDto) {
    return this.prisma.cake.update({
      where: { id },
      data: updateCakeDto,
    });
  }
  remove(id: number) {
    return this.prisma.cake.delete({
      where: { id },
    });
  }
}
