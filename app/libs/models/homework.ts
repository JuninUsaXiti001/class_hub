import { title } from "process";

export type HomeWork = {
    id:number;
    type:string;
    title:string;
    subject:string;
    description:string;
    date:string;
    archives:any;
    author:string;
}

export async function createHomeWork(homeWork:HomeWork) {
    const querie = fetch("/api/homework", {
        method: "POST",
        body: JSON.stringify({
            type: homeWork.type,
            title: homeWork.title,
            subject: homeWork.subject,
            description: homeWork.description,
            date: homeWork.date,
            author: homeWork.author
        })
    })

    const result = (await querie).json

    console.log((await querie).status)
    console.log(result)
}