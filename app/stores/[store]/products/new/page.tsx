"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import {
    ChevronLeft,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react";
import { Image } from '@nextui-org/image';
import { Input as NextInput } from '@nextui-org/input';

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { InputNumber } from 'primereact/inputnumber';


import { Textarea } from "@/components/ui/textarea"
import { getProductFeatures } from '@/api/direct/artisan/LoadFeatures';
import ProductImageUploader from '@/components/product/ProductImageUploader';
import { doProductListing } from '@/api/direct/artisan/ProductListing';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import Confetti, { ConfettiRef } from '@/components/magicui/confetti';


export const description =
    "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images."


const ListNewProduct = () => {


    const [title, setTtitle] = useState('');
    const [description, setDescription] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [images, setImages] = useState<File[]>([]);
    const [status, setStatus] = useState('1');

    const path = usePathname();
    const storeMatch = path.match(/\/stores\/([^\/]*)/);
    const storeName = storeMatch ? storeMatch[1] : null;
    const router = useRouter();

    const [categoryList, setCategoryList] = useState<ProductCategory[]>([]);
    const [subCategoryList, setSubCategoryList] = useState<ProductSubCategory[]>([]);
    const [statusList, setStatusList] = useState<ProductStatus[]>([]);

    const [filteredSubCategories, setFilteredSubCategories] = useState<
        ProductSubCategory[]
    >([]);

    useEffect(() => {
        const fetchProductFeatures = async () => {
            const response: ProductFeaturesResponse = await getProductFeatures();

            if (response) {
                setCategoryList(response.categoryList);
                setSubCategoryList(response.subCategoryList);
                setStatusList(response.productStatusList);
            }

            console.log(response);
        };

        fetchProductFeatures();
    }, []);

    // Handle category change and filter subcategories
    const handleCategoryChange = (selectedCategoryId: string) => {
        setCategory(selectedCategoryId);

        // Filter subcategories based on selected category ID
        const filteredSubCat = subCategoryList.filter(
            (subCategory) => subCategory.category.id.toString() === selectedCategoryId
        );
        setFilteredSubCategories(filteredSubCat);
    };


    const listProduct = async () => {

        const productDTO = {
            title,
            description,
            category,
            subCategory,
            price,
            quantity,
            images,
            status,
            storeName,
        }

        const response = await doProductListing(productDTO);
        console.log(productDTO)

        if (response.success) {

            toast({
                title: "Product Listing Success",
                description: response.content as any,
            })

            setTtitle("");
            setDescription("");
            setCategory("");
            setSubCategory("");
            setPrice("");
            setQuantity("1");
            setImages([]);
            setStatus("1");
            location.reload();
            // router.push("/stores/" + storeName + "/products?name=new", { scroll: true });

        } else {

            if (response.content === "SignIn") {
                router.push("/auth/signin", { scroll: true });
            }

            toast({
                variant: "destructive",
                title: "Error",
                description: response.content as any,
            })
        }

    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">

            <div className="flex flex-col mobile:gap-4 mobile:py-4">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 mobile:static mobile:h-auto mobile:border-0 mobile:bg-transparent mobile:px-6">


                    <Sheet>
                        <SheetTrigger asChild>

                            <Button size="icon" variant="outline" className="mobile:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>

                        </SheetTrigger>
                        <SheetContent side="left" className="mobile:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground tab:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className="hidden tab:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Products</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Edit Product</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="relative ml-auto flex-1 tab:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 tab:w-[200px] desktop:w-[320px]"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <Image
                                    src=""
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="overflow-hidden rounded-full"
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="grid flex-1 items-start gap-4 p-8 mobile:px-6 mobile:py-0 tab:gap-8">
                   
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">

               
                        <div className="flex items-center gap-4">
                            <Link href={"/stores/" + storeName + "/products"}>
                                <Button variant="outline" size="icon" className="h-7 w-7">
                                    <ChevronLeft className="h-4 w-4" />
                                    <span className="sr-only">Back</span>
                                </Button>
                            </Link>
                            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight mobile:grow-0">
                                Add New Product
                            </h1>

                            <div className="hidden items-center gap-2 tab:ml-auto tab:flex desktop:flex wide:flex">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button onClick={listProduct} size="sm">Save Product</Button>
                            </div>
                        </div>
                        <div className="grid gap-4 tab:grid-cols-[1fr_250px] desktop:grid-cols-3 desktop:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 desktop:col-span-2 desktop:gap-8">
                                
                                <Card x-chunk="dashboard-07-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Product Details</CardTitle>
                                        <CardDescription>
                                            Enter your new product details
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    className="w-full"
                                                    placeholder='Product Title'
                                                    onChange={(evt) => {
                                                        evt.preventDefault;
                                                        setTtitle(evt.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="description">Description</Label>
                                                <Textarea
                                                    id="description"
                                                    className="min-h-32"
                                                    placeholder='Describe your work'
                                                    onChange={(evt) => {
                                                        evt.preventDefault;
                                                        setDescription(evt.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card x-chunk="dashboard-07-chunk-2">
                                    <CardHeader>
                                        <CardTitle>Product Category</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6 mobile:grid-cols-3">
                                            <div className="grid gap-3">
                                                <Label htmlFor="category">Category</Label>
                                                <Select
                                                    onValueChange={(value) => handleCategoryChange(value)}
                                                >
                                                    <SelectTrigger
                                                        id="category"
                                                        aria-label="Select category"
                                                    >
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                    <SelectContent

                                                    >
                                                        {categoryList.map((category) => (
                                                            <SelectItem key={category.id} value={category.id.toString()}>{category.name}</SelectItem>
                                                        ))}

                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="subcategory">
                                                    Subcategory
                                                </Label>
                                                <Select
                                                    onValueChange={(value) => setSubCategory(value)}
                                                >
                                                    <SelectTrigger
                                                        id="subcategory"
                                                        aria-label="Select subcategory"
                                                    >
                                                        <SelectValue placeholder="Select subcategory" />
                                                    </SelectTrigger>
                                                    <SelectContent>

                                                        {filteredSubCategories.map((subCategory) => (
                                                            <SelectItem key={subCategory.id} value={subCategory.id.toString()}>
                                                                {subCategory.name}
                                                            </SelectItem>
                                                        ))}

                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card x-chunk="dashboard-07-chunk-2">
                                    <CardHeader>
                                        <CardTitle>Pricing Details</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">

                                            <div className="grid gap-3">
                                                <Label htmlFor="description">Price (LKR)</Label>
                                                <Input
                                                    id="name"
                                                    type="number"
                                                    className="w-full"
                                                    placeholder='0.00'
                                                    min={0}
                                                    onChange={(evt) => {
                                                        evt.preventDefault;
                                                        setPrice(evt.target.value);
                                                    }}
                                                />
                                            </div>

                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Quantity</Label>
                                                <Input
                                                    id="name"
                                                    type="number"
                                                    className="w-full"
                                                    placeholder='1'
                                                    value={quantity}
                                                    min={1}
                                                    onChange={(evt) => {
                                                        evt.preventDefault;
                                                        setQuantity(evt.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 desktop:gap-8">
                                <Card x-chunk="dashboard-07-chunk-3">
                                    <CardHeader>
                                        <CardTitle>Product Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="status">Status</Label>
                                                <Select
                                                    onValueChange={(value) => setStatus(value)}
                                                >
                                                    <SelectTrigger id="status" aria-label="Select status">
                                                        <SelectValue placeholder="Select status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {statusList.map((status) => (
                                                            <SelectItem key={status.id} value={status.id.toString()}>
                                                                {status.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card
                                    className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                                >
                                    <CardHeader>
                                        <CardTitle>Product Images</CardTitle>
                                        <CardDescription>
                                            Upload images for your product to make it visually appealing and easy to find
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ProductImageUploader setFiles={setImages} />
                                    </CardContent>
                                </Card>

                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 tab:hidden wide:hidden desktop:hidden">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm" onClick={listProduct}>Save Product</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ListNewProduct
