import { SIGN_IN } from "@/lib/endpoints";
import { BEMOODLE_API, getEnv } from "@/lib/utils";

export const doSignIn = async ({ username, email, password }: SignInDTO) => {
    const userDTO = { username, email, password };

    try {

        const response = await fetch(`${BEMOODLE_API}/${SIGN_IN}`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDTO),
            });


        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Sign-in failed: ${response.status}. Details: ${errorDetails}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to process user Sign In:', error);
        return null;
    }

};