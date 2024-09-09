import { LOAD_HOME_SERVLET } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";


export const getHomeContent = async () => {
    try {
        const response = await fetch(getEnv().BEMOODLE_API_URL + LOAD_HOME_SERVLET);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch Home Content:', error);
        return;
    }
};
