import {
  IsUUID,
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  // @IsUUID()
  // id: string;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

  @IsString()
  createdBy: never;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  rentPrice: any;

  @IsInt()
  buyPrice: number;

  @IsString({ each: true })
  images: string[];

  @IsInt()
  quantity: number;

  @IsBoolean()
  isAvailable: boolean;

  @IsDateString()
  availableFrom: string;

  @IsDateString()
  availableTill: string;

  @IsString()
  userId: string;

  @IsString()
  category: string;

  // @IsString()
  @IsOptional()
  subCategory1: string;

  // @IsString()
  @IsOptional()
  subCategory2: string;

  // @IsString()
  @IsOptional()
  subCategory3: string;
}
