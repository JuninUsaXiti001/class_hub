'use client'

import { usePostForm } from "@/app/hooks/usePostForm";
import icons from "@/app/libs/icons";
import "@tailwindplus/elements";
import { cloneElement } from "react";
import { toast } from "react-toastify";

const subjects = [
    "Matematica", "Física", "Química", "Biologia",
    "Portugues", "Redacao", "Literatura", "Trajetoria",
    "História", "Geografia", "Sociologia", "Filosofia", "Ingles"
];

const types = [
    "Trabalho", "Tarefa", "Slide/Material"
]

export default function PageForm({ type }) {
    async function createHomeWorkClient() {
        const c_type = document.getElementById("type-select").value
        const c_title = document.getElementById("title").value
        const c_subject = document.getElementById("subject-select").value
        const c_description = document.getElementById("description").value
        const c_date = document.getElementById("date-picker").value
        const c_author = document.getElementById("author").value
        const c_file = document.getElementById("dropzone-file").files[0]
        const c_final_file = [];

        if (!c_title || !c_date || !c_author) {
            toast.error("Por favor, preencha todos os campos obrigatórios.")
            return
        }

        if (c_file) {
            const file_extension = c_file.name.split(".").pop()
            if (file_extension != "pdf" && file_extension != "jpg" && file_extension != "png" && file_extension != "gif") {
                //alert("Formato de arquivo não suportado. Por favor, selecione um arquivo PDF ou imagem (JPG, PNG, GIF).")
                toast.error("Formato de arquivo não suportado. Por favor, selecione um arquivo PDF ou imagem (JPG, PNG, GIF).")
                return
            }

            if (c_file.size > 5 * 1024 * 1024) { // Limite de 5MB
                toast.error("O arquivo é muito grande. O limite é de 5MB.")
                return
            }

            c_final_file.push({url: "1223123", type: file_extension})
        }


        try {
            const res = await fetch("/api/homework", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: c_type,
                    title: c_title,
                    subject: c_subject,
                    description: c_description,
                    date: c_date,
                    archives: c_final_file,
                    author: c_author
                })
            })


            const data = await res.json()

            if (!res.ok) {
                console.error(data)
                toast.error("Erro ao criar tarefa: " + (data.error || "Erro desconhecido"))
                return
            }

            console.log("Sucesso:", data)
            //alert("Tarefa criada!")
            toast.success("Tarefa criada com sucesso!")

        } catch (err) {
            console.error(err)
            //alert("Erro na requisição")
            toast.error("Erro na requisição")
        }
    }

    return (
        <>
            <button
                command="show-modal"
                commandfor="createHomeWorkDialogue"
                className="flex items-center justify-center gap-2 rounded-[10px] bg-primary px-3 py-2 text-white transition duration-300 cursor-pointer hover:bg-primary/80 max-sm:w-full"
            >
                {cloneElement(icons.buttons.add, { className: " text-white" })}
                <span className="text-[14px] font-semibold">Adicionar</span>
            </button>

            <el-dialog>
                <dialog id="createHomeWorkDialogue" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <el-dialog-backdrop className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                    <div className="flex min-h-full items-center justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"                    >
                        <el-dialog-panel className="p-6 bg-white border border-border relative transform overflow-hidden rounded-lg  text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            {/* COMEÇO */}
                            <h2 className="text-[18px] font-bold mb-4 text-input-text">
                                {type === "create" ? "Adicionar Tarefa ou Material" : "Editar"}
                            </h2>

                            <form className="space-y-4">
                                {/* Tipo de Objeto */}
                                <el-select id="type-select" name="types" value={types[0]} className="mt-2 block">
                                    <button
                                        type="button"
                                        className="grid w-full cursor-default grid-cols-1 rounded-md border border-border bg-white py-3 pr-2 pl-3 text-left text-black focus-visible:outline-2 focus-visible:outline-indigo-500 sm:text-sm"
                                    >
                                        <el-selectedcontent className="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-black">
                                            <span className="block truncate">{types[0]}</span>
                                        </el-selectedcontent>

                                        <svg
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            data-slot="icon"
                                            aria-hidden="true"
                                            className="col-start-1 row-start-1 w-5 h-5 self-center justify-self-end text-gray-400"
                                        >
                                            <path
                                                d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <el-options
                                        anchor="bottom start"
                                        popover
                                        className="max-h-56 w-(--button-width) overflow-auto rounded-md bg-white border border-border py-1 text-base sm:text-sm"
                                    >
                                        {types.map((types, idx) => (
                                            <el-option
                                                value={types}
                                                key={idx}
                                                className="group/option relative block py-3 pr-9 pl-3 text-black select-none focus:bg-primary focus:text-white focus:outline-hidden transition duration-100 cursor-pointer"
                                            >
                                                <span className="block truncate font-normal group-aria-selected/option:font-semibold">
                                                    {types}
                                                </span>
                                            </el-option>
                                        ))}
                                    </el-options>
                                </el-select>

                                {/* Título */}
                                <input type="text" id="title" placeholder="Ex: Trabalho de física" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300" />

                                {/* Matéria */}
                                <el-select id="subject-select" name="subject" value={subjects[0]} className="mt-2 block">
                                    <button type="button" className="grid w-full cursor-default grid-cols-1 rounded-md border border-border bg-white py-3 pr-2 pl-3 text-left text-black focus-visible:outline-2 focus-visible:outline-indigo-500 sm:text-sm" >
                                        <el-selectedcontent className="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-black">
                                            <span className="block truncate">{subjects[0]}</span>
                                        </el-selectedcontent>

                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="col-start-1 row-start-1 w-5 h-5 self-center justify-self-end text-gray-400" > <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" fillRule="evenodd" /></svg>
                                    </button>

                                    <el-options anchor="bottom start" popover className="max-h-56 w-(--button-width) overflow-auto rounded-md bg-white border border-border py-1 text-base sm:text-sm" >
                                        {subjects.map((subject, idx) => (
                                            <el-option value={subject} key={idx} className="group/option relative block py-3 pr-9 pl-3 text-black select-none focus:bg-primary focus:text-white focus:outline-hidden transition duration-100 cursor-pointer">
                                                <span className="block truncate font-normal group-aria-selected/option:font-semibold">
                                                    {subject}
                                                </span>
                                            </el-option>
                                        ))}
                                    </el-options>
                                </el-select>

                                {/* Descrição */}
                                <textarea
                                    type="text"
                                    id="description"
                                    placeholder="Detalhes sobre a tarefa..."
                                    className="min-h-fit max-h-50 placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300 resize-y"
                                />

                                {/* Quem envia a tarefa */}
                                <input
                                    type="text"
                                    id="author"
                                    placeholder="Quem está adicionando"
                                    className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300"
                                />

                                {/* Data de entrega */}
                                <input
                                    type="date"
                                    id="date-picker"
                                    placeholder="Quem está adicionando"
                                    className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300"
                                />

                                {/* File Zone */}
                                <div class="flex items-center justify-center w-full cursor-pointer">
                                    <label for="dropzone-file" class="rounded-2xl flex flex-col items-center justify-center w-full bg-white border border-dashed border-default-strong border-border rounded-base cursor-pointer hover:bg-neutral-tertiary-medium hover:border-primary transition duration-300">
                                        <div class="flex flex-col items-center justify-center text-input-text pt-5 pb-6">
                                            <svg class="w-8 h-8 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" /></svg>
                                            <p class=""><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input accept="image/*, application/pdf" id="dropzone-file" type="file" className="mb-6 text-sm text-input-text" placeholder="" />
                                    </label>
                                </div>

                            </form>

                            <div className="mt-6 flex justify-end gap-4 max-md:w-full max-md:justify-start max-md:flex-col">
                                <button
                                    type="button"
                                    command="close"
                                    commandfor="createHomeWorkDialogue"
                                    onClick={() => {
                                        createHomeWorkClient();
                                    }}
                                    className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition duration-300 cursor-pointer"
                                >
                                    {type === "create" ? "Adicionar" : "Salvar"}
                                </button>

                                <button
                                    type="button"
                                    command="close"
                                    commandfor="createHomeWorkDialogue"
                                    className="px-4 py-2 bg-background text-input-text border border-border rounded-full hover:bg-primary-text/15 transition duration-300 cursor-pointer"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>
        </>
    );
}