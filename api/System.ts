import { getEnv } from "@/lib/utils";
import { StatusServlet } from "./endpoints/system";

export const getSystemStatus = async () => {
    try {
        const response = await fetch(
            getEnv().bemoodleApiUrl + StatusServlet, 
        {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch system status:', error);
        return;
    }
};
