import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex-col mt-56 text-center items-center justify-center'>
      <h2 className='text-2xl font-bold'>404 | Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}