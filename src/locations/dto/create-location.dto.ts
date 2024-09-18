import { IsNotEmpty, IsNumber, Length, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateLocationDto {
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
    country:String;
}
