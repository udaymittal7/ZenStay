'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer"
      src="/images/zenstay.png"
      height="140"
      width="140"
      alt="Logo"
    />
  );
};

export default Logo;
