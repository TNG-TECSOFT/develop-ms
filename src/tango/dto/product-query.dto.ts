import { IsOptional, IsInt, IsString, IsDateString, IsBoolean } from 'class-validator';

export class ProductQueryDto {
  @IsOptional()
  @IsInt()
  pageSize?: number;

  @IsOptional()
  @IsInt()
  pageNumber?: number;

  @IsOptional()
  @IsString()
  filter?: string;

  @IsOptional()
  @IsBoolean()
  onlyEnabled?: boolean;

  @IsOptional()
  @IsDateString()
  updatedDate?: Date;

  @IsOptional()
  @IsBoolean()
  onlyKit?: boolean;

  @IsOptional()
  @IsString()
  alternativeCode?: string;

  @IsOptional()
  @IsString()
  barCode?: string;

  @IsOptional()
  @IsString()
  token?: string;
}