import { IsOptional, IsInt, IsString, IsDateString, IsBoolean, IsArray } from 'class-validator';

export class OrderQueryDto {
  @IsOptional()
  @IsInt()
  pageSize?: number;

  @IsOptional()
  @IsInt()
  pageNumber?: number;

  @IsOptional()
  @IsString({ each: true })
  orderId?: string[];

  @IsOptional()
  @IsString({ each: true })
  state?: string[];

  @IsOptional()
  @IsDateString()
  fromDate?: Date;

  @IsOptional()
  @IsDateString()
  toDate?: Date;

  @IsOptional()
  @IsString()
  token?: string;
}