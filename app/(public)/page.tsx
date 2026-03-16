'use client';

import { useState } from "react";
import { Form } from "@/app/libs/models/form";
import PageForm from "../components/ui/Form";
import { usePostForm } from '@/app/hooks/usePostForm';

export default function Home() {
  const {postForm, setPostForm} = usePostForm();

  return (
    <main>
      {postForm.status && (
        <PageForm type={postForm.type} />
      )}
    </main>
  );
}