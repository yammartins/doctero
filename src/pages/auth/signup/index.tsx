import { useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import Link from "next/link";
import { AuthLayout } from "~/layouts";
import { Button, FormInput } from "~/components";
import { SignInHandles } from "~/types";

const SignUp: React.FC = () => {
  const [step, onStep] = useState(1);
  const signUpRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<SignInHandles> = data => {
    console.log(signUpRef);
  }

  return (
    <AuthLayout
     title="Cadastrar"
     description="Primeiro, precisamos de algumas informações básicas a respeito de você:"
     back
    >
      <Form
       ref={signUpRef}
       onSubmit={handleSubmit}
       className="signUp-box"
      >
        <div className="signUp-box-header">
          <div className="signUp-step-box">
            <div className="step-1">
              1
            </div>
            <div className="step-2">
              2
            </div>
            <div className="step-3">
              3
            </div>
          </div>
        </div>

        <div className="signUp-box-content">

          { step === 1 && (
            <div className="first-step-input">
              <FormInput
               fieldName="name"
               name="name"
               label="Nome"
               icon="user-circle"
              />

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
            </div>
          )}

        </div>

        <div className="signUp-box-footer">
          Já é cadastrado?
          <Link
           href="/auth/signin"
          >
            <a>
              Entrar
            </a>
          </Link>
        </div>
      </Form>
    </AuthLayout>
  )
};

export default SignUp;
