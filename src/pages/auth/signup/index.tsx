import { useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import Link from "next/link";
import { AuthLayout } from "~/layouts";
import { Text, Button, FormInput, Checkbox } from "~/components";
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

            <Checkbox
             label="Li e aceito os termos de serviço e a política de privacidade."
            />
          </div>
        )}

        <div className="signUp-box-footer">

          <div className="signUp-button-box">
            {step === 1 && (
              <Button
                label="Continuar"
                onClick={() => onStep(step + 1)}
                size="lg"
                className="firstStep-button"
              />
            )}
          </div>

          <Text
           weight="medium"
           size="sm"
           className="text-gray-500"
           align="center"
          >
            Já é cadastrado?
            <Link
            href="/auth/signin"
            >
              <a>
                Entrar
              </a>
            </Link>
          </Text>
        </div>
      </Form>
    </AuthLayout>
  )
};

export default SignUp;
