"use client"

import { cloneElement } from "react";
import icons from "@/app/libs/icons"
import { usePostForm } from '@/app/hooks/usePostForm';
import PageForm from "@/app/components/ui/Form"

export default function Navbar() {

    return (
        <header className="w-full border-b border-border px-4 py-2 flex justify-center">
            <nav className="flex w-full items-center justify-between max-w-6xl max-sm:flex-col">
                <div className="flex items-center gap-2">
                    {cloneElement(icons.geral.study, { className: "text-primary" })}

                    <h1 className="text-[19px] text-black font-bold ">
                        Class Hub
                    </h1>
                </div>

                <span className="text-primary text-[12px] max-sm:mb-1">
                    Muquifo castelo
                </span>

                <div>
                    <PageForm type={"create"}/>
                </div>
                {/* <button onClick={addHandler} className="flex items-center justify-center gap-2 rounded-[10px] bg-primary px-3 py-2 text-white transition duration-300 cursor-pointer hover:bg-primary/80 max-sm:w-full">
                    {cloneElement(icons.buttons.add, { className: " text-white" })}
                    <span className="text-[14px] font-semibold">Adicionar</span>
                </button> */}
            </nav>
        </header>
    )
}