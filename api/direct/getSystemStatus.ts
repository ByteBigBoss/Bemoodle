import { STATUS_SERVLET } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const getSystemStatus = async () => {
    try {
        const response = await fetch(
            getEnv().BEMOODLE_API_URL + STATUS_SERVLET,
    
        {
       
            credentials: 'include',
          
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch system status:', error);
        return null; 
    }
};
