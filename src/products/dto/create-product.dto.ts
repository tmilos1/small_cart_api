import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    readonly sku: string;

    @IsNotEmpty()
    readonly name: string;

    readonly description: string;
    
    @IsNotEmpty()
    readonly unitPrice: number;
}
