import { IsBoolean, IsNotEmpty, IsString, IsOptional, IsNumber,Length ,IsDateString, IsEmail, IsPositive, Min, MaxLength } from 'class-validator';

export class CustomerDTO {

    @IsNumber()
    @IsPositive()
    @Min(1)
    CustomerID: number;
  
    @IsString()
    @MaxLength(10)
    Code: string;
  
    @IsNumber()
    DocumentType: number;
  
    @IsString()
    @MaxLength(20)
    DocumentNumber: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    User: string;
  
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    Email: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    FirstName?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    LastName?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(200)
    BusinessName?: string;
  
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
    @IsNotEmpty()
    @MaxLength(4)
    ProvinceCode: string;
  
    @IsString()
    @IsOptional()
    @MaxLength(8)
    PostalCode?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(30)
    PhoneNumber1?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(30)
    PhoneNumber2?: string;
  
    @IsNumber()
    @IsOptional()
    Bonus?: number;
  
    @IsOptional()
    @IsString()
    @MaxLength(30)
    MobilePhoneNumber?: string;
  
    @IsString()
    @IsOptional()
    WebPage?: string;
  
    @IsString()
    @IsOptional()
    BusinessAddress?: string;
  
    @IsString()
    @IsOptional()
    Comments?: string;
  
    @IsNumber()
    @IsOptional()
    NumberListPrice?: number;
  
    @IsBoolean()
    @IsOptional()
    Removed?: boolean;
  
    @IsDateString()
    @IsOptional()
    DateUpdate?: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(3)
    IvaCategoryCode: string;

    @IsOptional()
    @IsBoolean()
    PayInternalTax?: boolean;
  }