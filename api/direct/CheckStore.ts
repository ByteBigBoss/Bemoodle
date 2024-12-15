import { CHECK_STORE } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doCheckStore = async () => {
    try {
        const response = await fetch(
            getEnv().BEMOODLE_API_URL + CHECK_STORE,
    
        {
       
            credentials: 'include',
          
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to Check User Stores:', error);
        return null; 
    }
};
