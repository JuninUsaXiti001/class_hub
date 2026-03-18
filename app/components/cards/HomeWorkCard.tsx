import icons from "@/app/libs/icons";
import { cloneElement } from "react";
import "@tailwindplus/elements"
import { HomeWork, HomeWorkType, deleteHomeWork } from "@/app/libs/models/homework";

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

const colors: { [key in HomeWorkType]: string } = {
    "Trabalho": "#3b82f6",
    "Tarefa": "#22c55e",
    "Slide/Material": "#f59e0b"
};

function DeleteButtonUI({homeWork}:{homeWork:HomeWork}) {


    function deleteHomeWorkClient() {
        deleteHomeWork(homeWork.id)
    }

    return (
        <>
            <button className="">

            </button>
            <button command="show-modal" commandfor="deleteHomeWorkDialogue" className="p-1 rounded-[7px] text-[#65758b] cursor-pointer hover:text-[#cc1d1d] hover:bg-[#cc1d1d]/20 transition duration-300">
                {cloneElement(icons.buttons.remove, {
                    className: "size-4.5",
                })}
            </button>

            <el-dialog>
                <dialog id="deleteHomeWorkDialogue" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <el-dialog-backdrop className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                    <div tabindex="0" className="flex min-h-full items-center justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <el-dialog-panel className="bg-white border border-border relative transform overflow-hidden rounded-lg  text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="bg-[#EB2857]/15 mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 text-[#EB2857]">
                                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 id="dialog-title" className="text-base font-semibold text-input-text">Deletar Tarefa</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-input-text">Você tem certeza que deseja deletar está tarefa? Ela será deletada permanentemente. Se Sim, clique em "Deletar"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={deleteHomeWorkClient} command="close" commandfor="deleteHomeWorkDialogue" className="inline-flex w-full justify-center rounded-full bg-[#EB2857] px-4 py-2 text-sm font-medium text-white hover:bg-[#EB2857]/90 sm:ml-3 sm:w-auto transition duration-300 cursor-pointer">Deletar</button>
                                <button type="button" command="close" commandfor="deleteHomeWorkDialogue" className="bg-background text-input-text border border-border hover:bg-primary-text/15 mt-3 inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-medium inset-ring inset-ring-white/5 sm:mt-0 sm:w-auto transition duration-300 cursor-pointer">Cancelar</button>
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>
        </>
    )
}


export default function HomeWorkCard({ homeWork }: { homeWork: HomeWork }) {
    const date = new Date(homeWork.date);

    const day = date.getDate().toString().padStart(2, "0");
    const month = meses[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return (
        <div className="p-4 flex flex-col gap-4 justify-start bg-white rounded-2xl border border-border hover:shadow-lg hover:shadow-gray-500/15 cursor-pointer transition duration-300 hover:border-input-text/10">
            <section className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex gap-2 items-center">
                    <span
                        style={{ "--type": colors[homeWork.type] } as React.CSSProperties}
                        className="border-(--type) bg-(--type)/15 text-(--type) border px-3 py-1 text-[12px] rounded-full"
                    >
                        {homeWork.type}
                    </span>

                    <span className="bg-background text-input-text px-3 py-1 text-[12px] rounded-full">
                        {homeWork.subject}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <DeleteButtonUI homeWork={homeWork} />
                    <button className="p-1 rounded-[7px] text-[#65758b] cursor-pointer hover:text-input-text hover:bg-input-text/20 transition duration-300">
                        {cloneElement(icons.buttons.edit, {
                            className: "size-4.5",
                        })}
                    </button>
                </div>


            </section>

            <section className="flex flex-col">
                <h3 className="text-black text-[18px] font-semibold">
                    {homeWork.title + " - " + homeWork.id}
                </h3>
                <p className="text-[#65758b] text-[14px] truncate">
                    {homeWork.description}
                </p>
            </section>

            <section className="flex gap-2 items-center text-[#65758b]">
                <span className="text-[12px] flex items-center gap-1">
                    {cloneElement(icons.geral.date, {
                        className: "inline-block size-4",
                    })}
                    {"Para: " + formattedDate}
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