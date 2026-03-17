'use client';

import { useState } from "react";
import { Form } from "@/app/libs/models/form";
import PageForm from "../components/ui/Form";
import { usePostForm } from '@/app/hooks/usePostForm';
import HomeWorkCard from "../components/cards/HomeWorkCard";

export default function Home() {
  const { postForm, setPostForm } = usePostForm();

  return (
    <main>

      {postForm.status && (
        <PageForm type={postForm.type} />

      )}


      <HomeWorkCard homeWork={{
        id: 1,
        type: "Tarefa",
        title: "Teste",
        subject: "História",
        description: "TesteDesc",
        date: "2026-03-16",
        archives: {},
        author: "Matheus"
      }} />

    </main>
  );
}