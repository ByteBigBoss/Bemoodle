import { getEnv } from "@/lib/utils";

export const doRegisterUser = async () => {

    const data = {
        username: "bytebigboss",
        password: "123456",
        email: "bytebigboss@example.com",
        firstname: "Nethmina",
        lastname: "Sandaruwan",
        role: "user",
    }

    const response = await fetch(
        getEnv().BEMOODLE_API_URL + "",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    if(response.ok){
        const json = await response.json();
        console.log(json);
    }

};