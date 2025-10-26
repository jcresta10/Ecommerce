import { Injectable, NotFoundException } from '@nestjs/common';
import { Tea } from './entities/tea.entity';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

@Injectable()
export class TeaService {
  private teas: Tea[] = [];
  private nextId = 1;

  findAll(): Tea[] {
    return this.teas;
  }

  findOne(id: number): Tea {
    const tea = this.teas.find((t) => t.id === id);
    if (!tea) throw new NotFoundException(`Tea with id ${id} not found`);
    return tea;
  }

  create(createTeaDto: CreateTeaDto): Tea {
    const tea: Tea = {
      id: this.nextId++,
      ...createTeaDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.teas.push(tea);
    return tea;
  }

  update(id: number, updateTeaDto: UpdateTeaDto): Tea {
    const tea = this.findOne(id);
    Object.assign(tea, updateTeaDto, { updatedAt: new Date() });
    return tea;
  }

  remove(id: number): Tea {
    const index = this.teas.findIndex((t) => t.id === id);
    if (index === -1)
      throw new NotFoundException(`Tea with id ${id} not found`);
    return this.teas.splice(index, 1)[0];
  }
}
