import icons from "@/app/libs/icons";
import { HomeWork } from "@/app/libs/models/homework";
import { cloneElement } from "react";

const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
];

export default function HomeWorkCard({ homeWork }: { homeWork: HomeWork }) {
    const [year, month, day] = homeWork.date.split("-");

    const mesExtenso = meses[Number(month) - 1];
    const formattedDate = `${day} ${mesExtenso} ${year}`;

    return (
        <div className="p-4 flex flex-col gap-4 justify-start bg-white rounded-2xl border border-border">
            <section className="flex gap-2 items-center">
                <span className="border border-type bg-type/20 text-type px-3 py-1 text-[12px] rounded-full">
                    {homeWork.type}
                </span>

                <span className="bg-background text-input-text px-3 py-1 text-[12px] rounded-full">
                    {homeWork.subject}
                </span>
            </section>

            <section className="flex flex-col">
                <h3 className="text-black text-[18px] font-semibold">
                    {homeWork.title}
                </h3>
                <p className="text-[#65758b] text-[14px]">
                    {homeWork.description}
                </p>
            </section>

            <section className="flex gap-2 items-center text-[#65758b]">
                <span className="text-[12px] flex items-center gap-1">
                    {cloneElement(icons.geral.date, {
                        className: "inline-block size-4",
                    })}
                    {formattedDate}
                </span>

                <span className="text-[12px] flex items-center gap-1">
                    {cloneElement(icons.geral.user, {
                        className: "inline-block size-4",
                    })}
                    {homeWork.author}
                </span>
            </section>
        </div>
    );
}