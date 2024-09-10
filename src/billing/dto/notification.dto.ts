import { IsString, IsNotEmpty } from 'class-validator';

export class NotificationDto {
  @IsString()
  @IsNotEmpty()
  Topic: string;

  @IsString()
  @IsNotEmpty()
  Resource: string;

  @IsString()
  Message: string;
}