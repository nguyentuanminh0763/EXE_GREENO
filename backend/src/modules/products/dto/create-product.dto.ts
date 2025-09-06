import {
  IsString,
  IsNumber,
  IsPositive,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Tên sản phẩm',
    example: 'Nước rửa chén Greeno Lemon',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Mô tả sản phẩm',
    example: 'Chiết xuất từ vỏ cam tươi, sạch khuẩn',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Giá sản phẩm', example: 50000 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'Trạng thái sản phẩm',
    required: false,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
