import { type NextPage } from "next";
import { LoginForm } from "@components/LoginForm";
import { MaxWidthWrapper } from "@components/MaxWidthWrapper";

const Login: NextPage = () => {
  return (
    <MaxWidthWrapper>
      <LoginForm />
    </MaxWidthWrapper>
  );
};

export default Login;
