import { IsOptional, IsInt, IsString, IsDateString } from 'class-validator';

export class CustomerQueryDto {
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
  @IsDateString()
  updatedDate?: Date;

  @IsOptional()
  @IsString()
  documentType?: string;

  @IsOptional()
  @IsString()
  documentNumber?: string;

  @IsOptional()
  @IsString()
  ivaCategoryCode?: string;

  @IsOptional()
  @IsString()
  token?: string;
}