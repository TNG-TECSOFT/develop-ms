import { IsNumber, IsNotEmpty, IsString, IsPositive, MaxLength } from 'class-validator';
export class CashPaymentDTO{
  
    @IsNumber()
    @IsPositive()
    PaymentID: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(3)
    PaymentMethod: string;
  
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    PaymentTotal: number;
}