"use client"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function Page(){
  const currentPathName = usePathname()

  useEffect(()=>{
    console.log(currentPathName); ///dashboard/invoices
  }, [])

  return (
    <p className="bg-[#efefef] w-40 whitespace-nowrap">Invoice Page</p>
  )
}