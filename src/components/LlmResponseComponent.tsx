'use client';
import React from 'react'
import Spinner from './ui/Spinner'
import { useRecoilValue } from 'recoil';
import { loadingAtom } from '@/store/atoms/userInput';
import { Bot } from 'lucide-react';

const LlmResponseComponent = ({content}: {content:string}) => {
    const hasLLMResponse = content && content.trim().length > 0 
    const loading = useRecoilValue(loadingAtom)
  return (
    <>
       {hasLLMResponse ? (
        <div className='flex items-center'>
            <Bot size={28}/>
            <p className='border border-slate-800 px-2 py-3 rounded-md bg-transparent flex ml-1'>{content}</p>
        </div>
      ): <p className='bg-transparent mx-3'>{loading && <Spinner/>}</p>}
    </>
  )
}

export default LlmResponseComponent
