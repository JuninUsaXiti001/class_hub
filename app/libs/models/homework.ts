import { title } from "process";

export type HomeWorkType = "Trabalho" | "Tarefa" | "Slide/Material"

export type HomeWork = {
    id: number;
    type: HomeWorkType;
    title: string;
    subject: string;
    description: string;
    date: string;
    archives: any;
    author: string;
}

export async function createHomeWork(homeWork: HomeWork) {
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

    // console.log((await querie).status)
    // console.log(result)
}

export async function deleteHomeWork(id: number) {
    const querie = fetch(`/api/homework/${id}`, {
        method: 'DELETE',
    })

    const result = (await querie).json

    console.log(result)
}

export async function getHomeWorkData({setHomeWorkData} : {setHomeWorkData : ( data : HomeWork[]) => void}) {
    const response = await fetch("/api/homework");
    const data = await response.json();

    // Garantir que sempre é array
    setHomeWorkData(Array.isArray(data) ? data : []);
}
