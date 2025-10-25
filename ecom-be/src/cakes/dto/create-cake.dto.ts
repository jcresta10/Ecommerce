import { IsOptional, IsString } from 'class-validator';
export class CreateCakeDto {
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  ingredients: string;

  @IsString()
  instructions: string;
}
