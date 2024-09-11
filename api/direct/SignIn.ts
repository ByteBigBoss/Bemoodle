import { SIGN_IN } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doSignIn = async ({username,email,password}:SignInDTO) => {

    const UserDTO = {
        username: username,
        email: email,
        password: password,
    }

    try {

        const response = await fetch(
            getEnv().BEMOODLE_API_URL + SIGN_IN,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserDTO),
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