import Image from "next/image";
import Link from "next/link";

export function Logo({ locale }: { locale?: string }) {
  return (
    <Link href={`/${locale}`} className="h-12 flex items-center">
      <Image src="/assets/logo-moises-developer.svg" width={104} height={22} alt="Moises Logo" priority={true} />
    </Link>
  );
}
