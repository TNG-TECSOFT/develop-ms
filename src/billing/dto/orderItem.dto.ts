import { IsNotEmpty, IsString, IsOptional, IsNumber, MaxLength, IsPositive, Min, Max } from 'class-validator';

export class OrderItemDTO{

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    ProductCode: string;

    @IsString()
    @MaxLength(40)
    SKUCode: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    VariantCode?: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(400)
    Description: string;

    @IsString()
    @MaxLength(400)
    VariantDescription: string;

    @IsNumber()
    @IsPositive()
    @Min(0.01)
    Quantity: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(99.99)
    DiscountPercentage?: number;

    @IsNumber()
    @IsPositive()
    UnitPrice: number;

    @IsOptional()
    @IsString()
    @MaxLength(1)
    SelectMeasureUnit?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(10)
    MeasureCode?: string;
}

