"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

interface ScrollToTopLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const ScrollToTopLink = ({
  href,
  children,
  onClick,
  scroll = true, // デフォルトでスクロール有効
  ...props
}: ScrollToTopLinkProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 外部リンクかどうかをチェック
    const isExternal = href.startsWith("http") || href.startsWith("//");

    if (!isExternal) {
      // 同一ページへのリンクかどうかをチェック
      const isSamePage = href.split("#")[0] === router.asPath.split("#")[0];

      if (!isSamePage && scroll) {
        // ページ遷移後にスクロールを最上部に移動
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    }

    // 元のonClickハンドラがあれば実行
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} {...props}>
      <div onClick={handleClick}>{children}</div>
    </Link>
  );
};

export default ScrollToTopLink;
