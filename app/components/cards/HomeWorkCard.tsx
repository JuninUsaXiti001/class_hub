import { HomeWork } from "@/app/libs/models/homework";


export default function HomeWorkCard({homeWork} : {homeWork : HomeWork}) {
    return(
        <div className="p-4 flex flex-col gap-4 justify-start bg-white rounded-2xl border border-border">
            <section className="flex gap-2 items-center">
                <span className="border border-type bg-type/20 text-type px-3 py-1 text-[12px] rounded-full">
                    {homeWork.type}
                </span>

                <span className=" bg-background text-input-text px-3 py-1 text-[12px] rounded-full">
                    {homeWork.subject}
                </span>
            </section>

            <section className="flex flex-col">
                <h3 className="text-black text-[16px] font-semibold">{homeWork.title}</h3>
                <p className="text-primary-text text-[14px]">{homeWork.description}</p>
            </section>

            <section className="flex gap-2">
                <span className="text-primary-text text-[12px]">
                    {homeWork.date}
                </span>

                <span className="text-primary-text text-[12px]">
                    {homeWork.author}
                </span>
            </section>
        </div>  
    )
}