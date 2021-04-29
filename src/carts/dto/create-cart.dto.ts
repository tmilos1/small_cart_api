import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
    @IsNotEmpty()
    readonly shippingFirstName: string;

    @IsNotEmpty()
    readonly shippingLastName: string;

    @IsNotEmpty()
    readonly shippingCountryCode: string;

    @IsNotEmpty()
    readonly shippingStreet: string;

    @IsNotEmpty()
    readonly shippingCity: string;

    @IsNotEmpty()
    readonly shippingPostcode: string;
}
