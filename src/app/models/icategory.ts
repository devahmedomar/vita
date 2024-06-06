export interface Icategory {
  arabicDescription:string,
  arabicName:string,
  categoryId:number,
  description:string,
  frenchDescription:string,
  frenchName:string,
  mainCategoryId:number,
  name:string
}

export interface ISubCategory {
  name: string;
  description: string;
  mainCategoryId: number;
  categoryId: number;
}

export interface IMainCategory {
  name: string;
  description: string;
  categoryId: number;
  subCategories: ISubCategory[];
}
