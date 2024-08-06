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
  categoryId:number;
  name: string;
  description: string;
  mainCategoryId: number; // The ID of the main category this subcategory belongs to
  subCategoryId: number; // Unique ID for the subcategory itself
}

export interface IMainCategory {
  name: string;
  description: string;
  categoryId: number; // Unique ID for the main category
  subCategories: ISubCategory[]; // List of subcategories under this main category
}

