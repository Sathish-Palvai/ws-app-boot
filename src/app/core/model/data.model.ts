export interface Product {
  id: string;
  name: string;
  links: any;
  priceRange: any;
  thumbnail: ImageType;
  hero: ImageType;
  images: ImageType[];
  swatches: any[];
  messages: any[];
  flags: any[];
  reviews: any[];
}

export interface ImageType {
  size: string;
  meta: string;
  alt: string;
  rel: string;
  width: number;
  href: string;
  height: number;
}
