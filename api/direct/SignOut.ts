import { SIGN_OUT } from "@/lib/endpoints";
import { BEMOODLE_API } from "@/lib/utils";
import axios from "axios";

export const SignOut = async () => {

    try {
        const response = await axios.get(`${BEMOODLE_API}/${SIGN_OUT}`, { withCredentials: true });

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return "OK";

    } catch (error) {
        console.error(error);
    }

};