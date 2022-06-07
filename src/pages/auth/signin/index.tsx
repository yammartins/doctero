import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { useRef } from "react";
import Link from "next/link";
import { AuthLayout } from "~/layouts";
import { SignInHandles } from "~/types";
import { FormInput, Button, Text } from "~/components";

const SignIn: React.FC = () => {
  const signInRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<SignInHandles> = data => {
    console.log(signInRef)
  }

  return (
    <AuthLayout
     title="Entrar"
    >
     <Form
      ref={signInRef}
      onSubmit={handleSubmit}
      className="signIn-box"
     >
      <div className="signIn-box-input">
        <FormInput
         fieldName="email"
         icon="envelope-simple-bold"
         label="E-mail"
         name="email"
        />

        <FormInput
         fieldName="password"
         icon="lock-bold"
         label="Senha"
         name="password"
        />

        <Link
         href="/"
        >
         <a>
           Esqueci minha senha
         </a>
        </Link>

      </div>

      <div className="signIn-box-button">
        <Button
         label="Entrar"
         full
         submit
        />

        <Text
         size="sm"
         weight="medium"
         family="jakarta"
        >
         Não possui uma conta?

         <Link
          href="/auth/signup"
         >
          <a>
            Cadastrar
          </a>
        </Link>
        </Text>
      </div>
     </Form>
    </AuthLayout>
  )
};

export default SignIn;

