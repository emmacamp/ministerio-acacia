export interface Product {
  id: number;
  url_path: string;
  title: string;
  price: number;
  imgUrl: string;
  description: string;
  variants: Variant[];
}

export interface Variant {
  variant_img: string;
}
