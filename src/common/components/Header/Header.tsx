import * as S from "./Header.styles";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Moon, LogOut } from "react-feather";
import { useRouter } from "next/router";

const HEADER_LINKS = [
  {
    label: "Transações",
    href: "/transactions",
  },
  { label: "Categorias", href: "/categories" },
];

export const Header = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const { url } = await signOut({
        callbackUrl: "/",
        redirect: false,
      });
      await router.push(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <S.InnerWrapper>
        <S.AvatarWrapper>
          {sessionData?.user?.image && (
            <Image src={sessionData.user.image} alt="" fill />
          )}
        </S.AvatarWrapper>
        <nav>
          <S.NavList>
            {HEADER_LINKS.map((link) => (
              <li key={link.href}>
                <S.NavLink
                  href={link.href}
                  data-active={router.pathname === link.href}
                >
                  {link.label}
                </S.NavLink>
              </li>
            ))}
          </S.NavList>
        </nav>
        <S.IconButton>
          <Moon />
        </S.IconButton>
        <S.IconButton type="button" onClick={handleSignOut}>
          <LogOut />
        </S.IconButton>
      </S.InnerWrapper>
    </header>
  );
};
