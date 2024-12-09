import Image from "next/image";
import { FiMonitor, FiMousePointer, FiCode, FiLock, FiPocket, FiZap } from "react-icons/fi";

export function FeatureCard({ title, description, icon }: Omit<any, "id">) {
  return (
    <div className="py-2 px-6 md:py-6 md:px-6">
      <div className="mb-2 flex h-12 items-center justify-start rounded-xl bg-primary/10 text-primary">
        <Image src={`/assets/icons/${icon}.svg`} alt={icon} width={24} height={24} />
      </div>
      <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
      <p className="text-sm text-[#858585] font-medium">{description}</p>
    </div>
  );
}
