import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { IsNotEmpty, IsNumber, Max, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
    @IsNotEmpty()
    @IsNumber()
    @Min(100000)  // Assuming the pincode is a 6-digit number
    @Max(999999)
    pincode: number;

    @IsNotEmpty()
    city:String;

    @IsNotEmpty()
    state:String;

    @IsNotEmpty()
    Country:String;
}
