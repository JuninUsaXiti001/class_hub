'use client';

import { cloneElement, useEffect, useState } from "react";
import HomeWorkCard from "../components/cards/HomeWorkCard";
import { usePostForm } from '@/app/hooks/usePostForm';
import { HomeWork, getHomeWorkData } from "@/app/libs/models/homework";
import icons from "../libs/icons";


export default function Home() {
  const teste: HomeWork = {
    id: 1,
    type: "Tarefa",
    title: "Teste",
    subject: "História",
    description: "TesteDesc",
    date: "2026-03-16",
    archives: {},
    author: "Matheus"
  }

  const { homeWorkData, setHomeWorkData } = usePostForm();

  useEffect(() => {
    getHomeWorkData({ setHomeWorkData });
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4">


      <ul className={`grid my-6 transition-all duration-300 ${homeWorkData.length === 0 ? "place-items-center" : "grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1"}`}>

        {homeWorkData.length === 0 ? (
          <div className="flex flex-col gap-1 justify-center items-center text-center">
            {cloneElement(icons.geral.study, {
              className: "size-20 text-[#65758b] mb-4",
            })}
            <h2 className="text-[#65758b] font-bold text-[20px]">Nenhum conteúdo encontrado</h2>
            <p className="text-[#65758b] text-[16px]">Clique em "Adicionar" para começar a organizar sua turma.</p>
          </div>
        )
          :
          homeWorkData.map((homeWork) => (
            <HomeWorkCard key={homeWork.id} homeWork={homeWork} />
          ))
        }

      </ul>

      {/* <ul className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6">
        <HomeWorkCard homeWork={teste} />
        <HomeWorkCard homeWork={teste} />
        <HomeWorkCard homeWork={teste} />
        <HomeWorkCard homeWork={teste} />
      </ul> */}

    </main>
  );
}