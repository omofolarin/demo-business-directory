export interface IBusinesses {
  [index: number]: IBusiness;
}

export interface IBusiness {
  name: string;
  description: string;
  categories: ICategory[];
  address: string;
  contactEmail: string;
  postalCode?: number;
  phone: string;
  logo: string;
  images?: IImages;
  websiteUrl: string;
  listedAt: Date;
  updatedAt: Date;
}

export interface ICategories {
  [index: number]: ICategory;
}

export interface ICategory {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IImage {
  title: string;
  type: "jpg" | "jpeg" | "png";
  url: string;
}

export interface IImages {
  [index: number]: IImage;
}

export interface IAdmin {
  password: string;
  email: string;
  token: string | null | undefined;
}

export interface IAnalytics {
  noViews: {
    businessName: string;
    views: number;
  }[];
}

export interface IApp {
  isInitialized: boolean;
}

interface schema {
  businesses: IBusinesses | IBusiness[];
  admin: IAdmin | null;
  categories: ICategories | ICategory[];
  analytics: IAnalytics;
  app: IApp;
}

export default schema;
