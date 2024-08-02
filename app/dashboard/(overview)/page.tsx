import RevenueChart from "../../ui/dashboard/revenue-chart"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import { lusitana } from "../../ui/fonts"
import { CardSkeleton } from "@/app/ui/skeletons"
import { fetchCardData } from "../../lib/data"
import { Suspense } from "react"
import { RevenueChartSkeleton } from "@/app/ui/skeletons"
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons"
import CardWrapper from "../../ui/dashboard/cards"
export default async function Page(){
  // const revenue = await fetchRevenue()
  // const latestInvoices = await fetchLatestInvoices()
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton></CardSkeleton>}>
          <CardWrapper></CardWrapper>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton></RevenueChartSkeleton>}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton></LatestInvoicesSkeleton>}>
            <LatestInvoices />
          </Suspense>
      </div>
    </main>
  )
}