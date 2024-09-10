import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString, Matches, MaxLength, IsPositive } from 'class-validator';
export class ShippingDTO{

    @IsNumber()
    @IsPositive()
    ShippingID: number;
  
    @IsOptional()
    @IsString()
    @MaxLength(40)
    ShippingCode?: string;
  
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    ShippingCost?: number;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    Street?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    HouseNumber?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    Floor?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    Apartment?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    City?: string;
  
    @IsString()
    @MaxLength(8)
    PostalCode: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(4)
    ProvinceCode: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(30)
    PhoneNumber1?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(30)
    PhoneNumber2?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversMonday must be either "S", "N", or empty.' })
    DeliversMonday?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversTuesday must be either "S", "N", or empty.' })
    DeliversTuesday?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversWednesday must be either "S", "N", or empty.' })
    DeliversWednesday?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversThursday must be either "S", "N", or empty.' })
    DeliversThursday?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversFriday must be either "S", "N", or empty.' })
    DeliversFriday?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversSaturday must be either "S", "N", or empty.' })
    DeliversSaturday?: string;
  
    @IsOptional()
    @Matches(/^[SN]?$/, { message: 'DeliversSunday must be either "S", "N", or empty.' })
    DeliversSunday?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(100)
    DeliveryHours?: string;
  
    @IsOptional()
    @IsDateString()
    DeliveryDate?: Date;
}