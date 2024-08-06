import { usePathname } from "next/navigation";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/invoices/pagination";
import Table from '@/app/ui/invoices/table';
import { InvoiceSkeleton } from "@/app/ui/skeletons";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { Suspense, useState } from "react";
import { lusitana } from "@/app/ui/fonts";
import { fetchFilteredInvoices } from "@/app/lib/data";
// import { useEffect } from "react";
export default async function Page({
  searchParams,
}: {
  searchParams? :{
    query?: string,
    page?: string
  }
}){
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Search placeholder={"Search invoices..."}></Search>
        <CreateInvoice></CreateInvoice>
      </div>
      <Suspense fallback={<InvoiceSkeleton ></InvoiceSkeleton>} key={ query + currentPage}>
        <Table query={query} currentPage={currentPage} ></Table>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages}></Pagination> */}
      </div>
    </div>
  )
}