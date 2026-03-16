'use client'

import { FormType } from "@/app/libs/models/form";
import "@tailwindplus/elements";

const subjects = [
    "Matematica", "Física", "Química", "Biologia",
    "Portugues", "Redacao", "Literatura", "Trajetoria",
    "História", "Geografia", "Sociologia", "Filosofia", "Ingles"
];

export default function PageForm({ type }) {
    return (
        <div className="fixed inset-0 z-50 w-screen h-screen bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-122 w-full">

                <input type="text" id="title" placeholder="Ex: Trabalho de física" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300"/>

                <el-select id="select" name="selected" value={subjects[0]} className="mt-2 block">
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

                <textarea type="text" id="title" placeholder="Detalhes sobre a tarefa..." className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300 resize-y"/>

                <input type="text" id="title" placeholder="Quem está adicionando" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300"/>
                <input type="date" id="title" placeholder="Quem está adicionando" className="placeholder:font-medium w-full px-3 py-3 text-black placeholder:text-primary-text rounded-md border border-border focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300"/>

                
                

            </div>
        </div>
    );
}