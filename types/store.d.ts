type CheckStore = {
    status:boolean;
    isArtisan:boolean;
    isSignIn:boolean;
    storeList:[];
}

type StoreStatus = {
    id: number;
    name: string;
};

type StoreListItem = {
    id: number;
    artisan: Artisan;
    storeCategory: StoreCategory;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    storeStatus: StoreStatus;
};

type StoreCategory = {
    id: number;
    name: string;
}

type StoreCategoryList = {
    storeCategoryList: [];
}

type StoreDTO = {
    name: string;
    description: string;
    categoryId: number;
}

type Store = {
    name:string;
    description: string;
    category:string;
}

type CreateStoreResponse ={
    success: boolean;
    store:Store;
    message:string;
}

type ProductCategory = {
    id: number;
    name: string;
    description:string;
}

type ProductSubCategory = {
    id: number;
    name: string;
    description:string;
    category:ProductCategory;
}

type ProductStatus = {
    id: number;
    name: string;
}

type ProductFeaturesResponse ={
    categoryList:ProductCategory[];
    subCategoryList:ProductSubCategory[];
    productStatusList:ProductStatus[];
}

type ProductListingDTO = {
    title: string;
    storeName:string | null;
    description: string;
    category: string;
    subCategory: string;
    price: string;
    quantity: string;
    status:string;
    images: File[];
}

type StoreProductsProps = {
    store:string | string[];
}

type StoreProduct = {
    artisan:Artisan;
    id: number;
    title: string;
    description: string;
    price: number;
    qty: number;
    productStatus: ProductStatus;
    created_at: string;
    store: Store;
    subCategory: ProductSubCategory;
};

type StoreProductsResponse = {
    success: boolean;
    storeProductList: StoreProduct[];
    message?:string;
};