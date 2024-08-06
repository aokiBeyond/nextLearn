import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/home.module.css'
import { lusitana, kalnia } from './ui/fonts'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* <div
          className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-red-100"
        /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 lg:w-2/5 lg:px-20">
          {/* lusitana.className 使用字体 */}
          <p className={`${lusitana.className} text-xl text-gray-800 lg:text-3xl lg:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 lg:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 lg:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 lg:w-3/5 lg:px-28 lg:py-12">
          {/* Add Hero Images Here md:768px */}
          <Image 
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className='hidden lg:block'
            alt='hero Image'
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className='block lg:hidden'
            alt='hero Image'
          ></Image>
        </div >
        {/* <div className={styles.shape}></div> */}
      </div>
    </main>
  );
}
