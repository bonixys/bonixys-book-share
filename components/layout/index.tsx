import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { BONIXYS_BIZ_PORTFOLIO_URL } from "@/lib/constants";
import Navigation from "./partial/navigation";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Navigation {...meta} />
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="fixed inset-x-0 bottom-0 w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          A <a className="underline text-purple-500" href={BONIXYS_BIZ_PORTFOLIO_URL}>Bonixys</a> project
        </p>
      </div>
    </>
  );
}
