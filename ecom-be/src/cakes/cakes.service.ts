import { Injectable } from '@nestjs/common';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CakesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCakeDto: CreateCakeDto) {
    return this.prisma.cake.create({
      data: {
        name: createCakeDto.name,
        description: createCakeDto.description,
        ingredients: createCakeDto.ingredients,
        image: createCakeDto.image,
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
