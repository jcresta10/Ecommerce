import { IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator';

export class CreateCakeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsString({ each: true })
  ingredients: string[];

  @IsOptional()
  @IsString()
  image?: string;
}
