import { IsNotEmpty } from 'class-validator';

export class CreateCartItemDto {
    @IsNotEmpty()
    readonly productId: number;
    @IsNotEmpty()
    readonly quantity: number;
}
