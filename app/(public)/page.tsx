'use client';

import { cloneElement, useEffect, useState } from "react";
import { Form } from "@/app/libs/models/form";
import PageForm from "../components/ui/Form";
import { usePostForm } from '@/app/hooks/usePostForm';
import HomeWorkCard from "../components/cards/HomeWorkCard";
import { HomeWork } from "@/app/libs/models/homework";
import icons from "../libs/icons";


export default function Home() {
  const { postForm, setPostForm } = usePostForm();

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

  const [homeWorkData, setHomeWorkData] = useState<HomeWork[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/homework");
      const data = await response.json();

      // Garantir que sempre é array
      setHomeWorkData(Array.isArray(data) ? data : []);
    }

    fetchData();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4">

      {postForm.status && (
        <PageForm type={postForm.type} />

      )}


      <ul className={`grid mt-6 ${homeWorkData.length === 0 ? "place-items-center" : "grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1"}`}>
        {homeWorkData.length === 0 ? (
          <div className="flex flex-col gap-1 justify-center items-center text-center">
            {cloneElement(icons.geral.study, {
              className: "size-12 text-[#65758b] mb-4",
            })}
            <h2 className="text-[#65758b] font-bold text-[20px]">Nenhum conteúdo encontrado</h2>
            <p className="text-[#65758b] text-[16px]">Clique em "Adicionar" para começar a organizar sua turma.</p>
          </div>
        ) : homeWorkData.map((homeWork) => (
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