import { CHECK_STORE, LOAD_STORE_CATEGORY } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doLoadStoreCategories = async () => {
    try {
        const response = await fetch(
            getEnv().BEMOODLE_API_URL + LOAD_STORE_CATEGORY,
    
        {
       
            credentials: 'include',
          
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch Store Categories:', error);
        return null; 
    }
};
