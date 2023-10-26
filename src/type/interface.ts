export interface IFilter {
  color?: string;
  price?: {
    priceStart: number,
    priceEnd:number
  } ;
  category?: string;
}

export interface IProduct {
  img: string;
  title: string;
  star?: string;
  prevPrice?: string;
  newPrice: number;
  count?: number;
  id:number // Add a count property
}

export interface ICard extends IProduct{
  setProduct: (product: IProduct[]) => void;
}
export interface IShopping {
  product: IProduct[],
}