'use client'

import { createContext, useContext, useState, ReactNode } from 'react';
import { Form } from '@/app/libs/models/form';

type PostFormContextType = {
  postForm: Form;
  setPostForm: React.Dispatch<React.SetStateAction<Form>>;
};

const PostFormContext = createContext<PostFormContextType | null>(null);

export function PostFormProvider({ children }: { children: ReactNode }) {
  const [postForm, setPostForm] = useState<Form>({
    type: "create",
    status: false,
  });

  return (
    <PostFormContext.Provider value={{ postForm, setPostForm }}>
      {children}
    </PostFormContext.Provider>
  );
}

export function usePostForm() {
  const context = useContext(PostFormContext);

  if (!context) {
    throw new Error("usePostForm must be used inside PostFormProvider");
  }

  return context;
}