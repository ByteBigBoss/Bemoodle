import { CREATE_STORE } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doCreateStore = async ({name,description,categoryId}:StoreDTO) => {

    const StoreDTO = {
        name: name,
        description: description,
        categoryId: categoryId
    }

    try {

        const response = await fetch(
            getEnv().BEMOODLE_API_URL + CREATE_STORE,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(StoreDTO),
            });


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to create new Artisan Store:', error);
        return null;
    }

};