import { sendGmailApiUrl } from "../../constants";

interface sendOrderProjectGmailProps {
    email: string;
    firstName: string;
    projectName: string;
    budget: string;
    desc: string;
    deadLine: string;
}

interface sendOrderProjectGmailOutPut {
    status: number;
    message: string;
}

async function sendOrderProjectGmail({
    budget, deadLine, desc, email, firstName, projectName
}: sendOrderProjectGmailProps):Promise<sendOrderProjectGmailOutPut> {
    const url = sendGmailApiUrl

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            budget: budget,
            deadLine: deadLine,
            desc: desc,
            firstName: firstName,
            projectName: projectName
        })
    }

    const res = await fetch(url, fetchOptions)

    if(res.ok) {
        return await res.json()
    }
    else {
        throw new Error("something went wrong")
    }
}

export {
    sendOrderProjectGmail
}

export type {
    sendOrderProjectGmailOutPut
}