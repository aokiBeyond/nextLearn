"use client"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import { fetchRevenue } from "@/app/lib/data";
export default async function Page(){
  const currentPathName = usePathname()
  // const revenue = await fetchRevenue()
  // console.log(revenue);
  useEffect(()=>{
    console.log(currentPathName); ///dashboard/invoices
  }, [])

  return (
    <p className="bg-[#efefef] w-40 whitespace-nowrap">Invoice Page</p>
  )
}