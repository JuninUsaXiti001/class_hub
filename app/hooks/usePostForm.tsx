'use client'

import { createContext, useContext, useState, ReactNode } from 'react';
import { HomeWork } from '../libs/models/homework';

type PostFormContextType = {
  homeWorkData: HomeWork[];
  setHomeWorkData: React.Dispatch<React.SetStateAction<HomeWork[]>>;
};

const PostFormContext = createContext<PostFormContextType | null>(null);

export function PostFormProvider({ children }: { children: ReactNode }) {
  const [homeWorkData, setHomeWorkData] = useState<HomeWork[]>([]);

  return (
    <PostFormContext.Provider value={{ homeWorkData, setHomeWorkData }}>
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