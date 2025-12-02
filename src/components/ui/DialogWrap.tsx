'use client'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
export default function DialogWrap({ children, open, onOpenChange }: any){
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />
      <Dialog.Content className="fixed right-4 bottom-4 bg-white p-4 rounded shadow-lg">{children}</Dialog.Content>
    </Dialog.Root>
  )
}
