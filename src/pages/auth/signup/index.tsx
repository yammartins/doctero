import { useState } from 'react';

import { Form } from '@unform/web';

import { Input, Button, Checkbox } from '~/components';
import { Auth } from '~/layouts';
import { Created } from '~/styles';

const SignUp: React.FC = () => {
  const [nextStep, onNextStep] = useState(0);

  return (
    <Auth
      title="Criar conta"
      description={nextStep === 0
        ? 'Vamos começar por algumas informações essenciais.'
        : 'Agora nos diga qual o seu objetivo.'}
      previous
    >
      <Created>
        <Form
          onSubmit={() => {}}
          className="signup-box"
        >

          <div className={`first-step ${nextStep === 0 ? 'is-show' : ''}`}>

            <Input
              label="Nome completo"
              name="name"
              icon="user"
            />

            <Input
              label="E-mail"
              name="email"
              icon="email"
              type="email"
            />

            <Input
              label="Senha"
              name="password"
              type="password"
              icon="password"
            />

            <Input
              label="Telefone"
              name="phone"
              icon="phone"
              mask="(99) 99999-9999"
            />

          </div>

          <Button
            type={nextStep === 0 ? 'button' : 'submit'}
            label={nextStep === 0 ? 'Avançar' : 'Cadastrar'}
            full
            onClick={() => onNextStep(nextStep + 1)}
            appearance="secondary"
          />

          <div className={`second-step ${nextStep === 1 ? 'is-show' : ''}`}>
            <Checkbox
              label="Donatário"
              weight="500"
            />
          </div>

        </Form>
      </Created>

    </Auth>
  );
};

export default SignUp;
