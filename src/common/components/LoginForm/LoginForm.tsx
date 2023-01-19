import { signIn } from "next-auth/react";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import * as S from "./LoginForm.styles";

export const LoginForm = () => {
  const handleLoginWithProvider = async (provider: string) => {
    const data = await signIn(provider, {
      callbackUrl: "/transactions",
    });
  };

  return (
    <S.Container>
      <S.Heading>Bem vindo!</S.Heading>
      <S.SubHeading>Insira suas credenciais!</S.SubHeading>
      <S.Form>
        <Input id="email" label="Email" />
        <Input id="password" label="Password" />
        <Button size="medium" color="blue">
          Entrar
        </Button>
      </S.Form>
      <S.Details>
        Não tem uma conta? <a href="#">cadastre-se</a>
      </S.Details>
      <S.Divider>
        <p>Ou</p>
      </S.Divider>
      <Button
        onClick={() => void handleLoginWithProvider("discord")}
        fullWidth
        size="medium"
        color="blue"
      >
        Entrar com o Discord
      </Button>
    </S.Container>
  );
};
