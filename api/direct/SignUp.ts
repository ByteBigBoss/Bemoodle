import { SIGN_UP } from "@/lib/endpoints";
import { getEnv } from "@/lib/utils";

export const doSignUp = async ({display_name,username,email,password}:UserDTO) => {

    const UserDTO = {
        display_name: display_name,
        username: username,
        email: email,
        password: password,
    }

    try {

        const response = await fetch(
            getEnv().BEMOODLE_API_URL + SIGN_UP,
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