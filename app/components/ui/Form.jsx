'use client'

import { usePostForm } from "@/app/hooks/usePostForm";
import icons from "@/app/libs/icons";
import "@tailwindplus/elements";
import { cloneElement } from "react";

import { createHomeWork } from '@/app/libs/models/homework'


const subjects = [
    "Matematica", "Física", "Química", "Biologia",
    "Portugues", "Redacao", "Literatura", "Trajetoria",
    "História", "Geografia", "Sociologia", "Filosofia", "Ingles"
];

const types = [
    "Trabalho", "Tarefa", "Slide/Material"
]

export default function PageForm({ type }) {
    const { postForm, setPostForm } = usePostForm();

    function teste() {
        var id = document.getElementById("subject-select")
        alert(id.value)
    }

    function close() {
        setPostForm({ type: "create", status: false })
    }

    async function createHomeWorkClient() {
        const c_type = document.getElementById("type-select").value
        const c_title = document.getElementById("title").value
        const c_subject = document.getElementById("subject-select").value
        const c_description = document.getElementById("description").value
        const c_date = document.getElementById("date-picker").value
        const c_author = document.getElementById("author").value

        try {
            const res = await fetch("/api/homework", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: c_type || "Tarefa",
                    title: c_title || "Teste",
                    subject: c_subject || "História",
                    description: c_description,
                    date: c_date || "2026-03-16",
                    archives: {},
                    author: c_author || "Matheus"
                })
            })


            const data = await res.json()

            if (!res.ok) {
                console.error(data)
                alert("Erro ao criar tarefa")
                return
            }

            console.log("Sucesso:", data)
            alert("Tarefa criada!")

        } catch (err) {
            console.error(err)
            alert("Erro na requisição")
        }
    }

    return (
        <div className="fixed inset-0 z-50 w-screen h-screen bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-122 w-full">


                <div className="relative">
                    <button onClick={close} className="absolute right-0 top-2 -translate-y-1/2 text-input-text/70 hover:text-input-text/50 transition duration-300 cursor-pointer">
                        {cloneElement(icons.geral.close, { className: "" })}
                    </button>
                </div>

                <h2 className="text-[18px] font-bold mb-4 text-input-text">{type === "create" ? "Adicionar tarefa ou Material" : "Editar"} Material</h2>

                <form className="space-y-4">

                    {/* Tipo de Objeto */}
                    <el-select id="type-select" name="types" value={types[0]} className="mt-2 block">
                        <button type="button" className="grid w-full cursor-default grid-cols-1 rounded-md border border-border bg-white py-3 pr-2 pl-3 text-left text-black focus-visible:outline-2 focus-visible:outline-indigo-500 sm:text-sm">
                            <el-selectedcontent className="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-black">
                                <span className="block truncate">{types[0]}</span>
                            </el-selectedcontent>

                            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="col-start-1 row-start-1 w-5 h-5 self-center justify-self-end text-gray-400">
                                <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                        </button>

                        <el-options anchor="bottom start" popover className="max-h-56 w-(--button-width) overflow-auto rounded-md bg-white border border-border py-1 text-base sm:text-sm">
                            {types.map((types, idx) => (
                                <el-option value={types} key={idx} className="group/option relative block py-3 pr-9 pl-3 text-black select-none focus:bg-primary focus:text-white focus:outline-hidden transition duration-100 cursor-pointer">
                                    <span className="block truncate font-normal group-aria-selected/option:font-semibold">{types}</span>
                                </el-option>
                            ))}
                        </el-options>
                    </el-select>

                    {/* Título */}
                    <input type="text" id="title" placeholder="Ex: Trabalho de física" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300" />

                    {/* Matéria */}
                    <el-select id="subject-select" name="subject" value={subjects[0]} className="mt-2 block">
                        <button type="button" className="grid w-full cursor-default grid-cols-1 rounded-md border border-border bg-white py-3 pr-2 pl-3 text-left text-black focus-visible:outline-2 focus-visible:outline-indigo-500 sm:text-sm">
                            <el-selectedcontent className="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-black">
                                <span className="block truncate">{subjects[0]}</span>
                            </el-selectedcontent>

                            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="col-start-1 row-start-1 w-5 h-5 self-center justify-self-end text-gray-400">
                                <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                        </button>

                        <el-options anchor="bottom start" popover className="max-h-56 w-(--button-width) overflow-auto rounded-md bg-white border border-border py-1 text-base sm:text-sm">
                            {subjects.map((subject, idx) => (
                                <el-option value={subject} key={idx} className="group/option relative block py-3 pr-9 pl-3 text-black select-none focus:bg-primary focus:text-white focus:outline-hidden transition duration-100 cursor-pointer">
                                    <span className="block truncate font-normal group-aria-selected/option:font-semibold">{subject}</span>
                                </el-option>
                            ))}
                        </el-options>
                    </el-select>

                    {/* Descrição */}
                    <textarea type="text" id="description" placeholder="Detalhes sobre a tarefa..." className="min-h-fit max-h-50 placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300 resize-y" />

                    {/* Quem envia a tarefa */}
                    <input type="text" id="author" placeholder="Quem está adicionando" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300" />

                    {/* Data de entrega */}
                    <input type="date" id="date-picker" placeholder="Quem está adicionando" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300" />

                </form>

                <div className="mt-6 flex justify-end gap-4 max-md:w-full max-md:justify-start max-md:flex-col">
                    <button onClick={teste} className="px-4 py-2 bg-background text-input-text border border-border rounded-full hover:bg-primary-text/15 transition duration-300 cursor-pointer">Cancelar</button>
                    <button onClick={() => { createHomeWorkClient() }} className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition duration-300 cursor-pointer">{type === "create" ? "Adicionar" : "Salvar"}</button>
                </div>
            </div>
        </div>
    );
}