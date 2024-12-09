import { Social } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface FooterSocialProps {
  social: Social;
}

export function FooterSocial({ social }: FooterSocialProps) {
  return (
    <div className="flex space-x-6 text-white text-opacity-40 mt-4">
      <Link href={social.facebook}>
        <Image className="h-6 w-6" src={`assets/icons/socials/facebook.svg`} alt={"Facebook"} width={24} height={24} />
      </Link>
      <Link href={social.instagram}>
        <Image className="h-6 w-6" src={`assets/icons/socials/instagram.svg`} alt={"Insta"} width={24} height={24} />
      </Link>
      <Link href={social.twitter}>
        <Image className="h-6 w-6" src={`assets/icons/socials/twitter.svg`} alt={"Twitter"} width={24} height={24} />
      </Link>
      <Link href={social.youTube}>
        <Image className="h-6 w-6" src={`assets/icons/socials/youtube.svg`} alt={"Youtube"} width={24} height={24} />
      </Link>
      <Link href={social.tikTok}>
        <Image className="h-6 w-6" src={`assets/icons/socials/tiktok.svg`} alt={"TikTok"} width={24} height={24} />
      </Link>
      <Link href={social.linkedIn}>
        <Image className="h-6 w-6" src={`assets/icons/socials/linkedin.svg`} alt={"LinkedIn"} width={24} height={24} />
      </Link>
    </div>
  );
}
