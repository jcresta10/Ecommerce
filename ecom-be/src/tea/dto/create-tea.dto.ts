import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateTeaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  type: string;

  @IsArray()
  @IsString({ each: true })
  ingredients: string[];

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}
