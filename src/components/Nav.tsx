import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='sticky top-0 flex pt-2 pb-1 text-xl border-b border-b-orange-600 font-headers bg-gray-50'>
      <div className='flex-grow'>
        <Link href='/'>Project Name</Link>
      </div>
      <div>Menu</div>
    </nav>
  );
}
