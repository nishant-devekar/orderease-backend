/* eslint-disable prettier/prettier */
export class Product {
    id: number;
    name: string;
    description?: string;

    price: number;
    offerPrice?: number;

    stock: number;
    sku?: string;
    barcode?: string;

    brand?: string;
    category?: string;
    tags?: string[];

    imageUrl?: string;
    gallery?: string[];

    status?: 'active' | 'inactive' | 'archived';

    attributes?: ProductAttributes;

    createdAt?: Date;
    updatedAt?: Date;
}

export class ProductAttributes {
    model?: string;
    material?: string;
    color?: string;
    size?: string;
    weight?: string;
    dimensions?: string; // e.g. "20x10x5 cm"

    warranty?: string;
    manufactureDate?: string;
    expiryDate?: string;
    originCountry?: string;

    condition?: 'new' | 'used' | 'refurbished';

    // Digital product
    fileUrl?: string;
    licenseKey?: string;
    platform?: string;

    // Apparel
    gender?: 'male' | 'female' | 'unisex';
    ageGroup?: 'adult' | 'kids' | 'infant';
    fabricType?: string;
    fit?: string;

    // Electronics
    batteryLife?: string;
    voltage?: string;
    powerConsumption?: string;
    connectivity?: string;

    // Furniture
    assemblyRequired?: boolean;
    roomType?: string;

    // SEO
    metaTitle?: string;
    metaDescription?: string;

    // Flags
    isFeatured?: boolean;
    isNewArrival?: boolean;
    isBestSeller?: boolean;

    [key: string]: any; // fallback for any extra fields
}
