import { Form } from '@unform/web';

import { Input, Button } from '~/components';
import { Auth } from '~/layouts';
import { Created } from '~/styles';

const SignUp: React.FC = () => (
  <Auth
    title="Criar conta"
    description="Vamos começar por algumas informações essenciais."
    previous
  >
    <Created>
      <Form
        onSubmit={() => {}}
        className="signup-box"
      >

        <div className="input-box">

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
          type="submit"
          label="Criar conta"
          full
          appearance="secondary"
        />

      </Form>
    </Created>

  </Auth>
);

export default SignUp;
