import { IsNumber, IsDateString, IsString, IsNotEmpty, MaxLength, IsPositive, Min, IsOptional } from 'class-validator';
export class PaymentDTO{

  @IsNumber()
  @IsPositive()
  PaymentID: number;

  @IsDateString()
  @IsNotEmpty()
  TransactionDate: string; // Formato yyyy-MM-ddTHH:mm:ss

  @IsOptional()
  @IsString()
  @MaxLength(8)
  AuthorizationCode?: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  TransactionNumber?: string;

  @IsNumber()
  @Min(1)
  Installments: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  InstallmentAmount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  Total: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  CardCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  CardPlanCode: string;

  @IsNumber()
  @IsPositive()
  VoucherNo: number;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  CardPromotionCode?: string;
}