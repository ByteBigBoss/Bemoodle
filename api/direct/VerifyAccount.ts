import { VERIFY_ACCOUNT } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doVerifyAccount = async ({verification}:VerifyDTO) => {

    const VerifyDTO = {
        verification:verification
    }

    try {

        const response = await fetch(
            getEnv().BEMOODLE_API_URL + VERIFY_ACCOUNT,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(VerifyDTO),
            });


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to process user registration:', error);
        return null;
    }

};