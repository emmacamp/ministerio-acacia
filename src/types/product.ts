interface ProductVariant {
  variant_img: string;
}

interface ProductDescription {
  material: string;
  design: string;
  combination: string;
  occasion: string;
}

export interface Product {
  id: number;
  url_path: string;
  title: string;
  price: number;
  imgUrl: string;
  description: ProductDescription;
  variants: ProductVariant[];
}
