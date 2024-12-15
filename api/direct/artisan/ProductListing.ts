import { PRODUCT_LISTING } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doProductListing = async ({
    title,
    description,
    category,
    subCategory,
    price,
    quantity,
    images,
    storeName,
    status
}: ProductListingDTO) => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('status', status);
    formData.append('storeName', storeName?storeName:"");

    formData.append('img1', images[0] || '');
    formData.append('img2', images[1] || '');
    formData.append('img3', images[2] || '');

    try {
        const response = await fetch(getEnv().BEMOODLE_API_URL + PRODUCT_LISTING, {
            method: 'POST',
            credentials: 'include',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to create new product listing:', error);
        return null;
    }
};
