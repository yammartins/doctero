import { Form } from '@unform/web';

import { Input, Button } from '~/components';
import { Auth } from '~/layouts';
import { Created } from '~/styles';

const SignUp: React.FC = () => (
  <Auth
    title="Criar conta"
    description="Cadastre-se e nos ajude a continuar essa causa!"
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
            label="CPF"
            name="cpf"
            icon="cpf"
            mask="999.999.999-99"
          />

          <Input
            label="Telefone"
            name="phone"
            icon="phone"
            mask="(99) 99999-9999"
          />

          <div className="address-box">
            <Input
              label="Endereço"
              name="address"
              icon="address"
            />

            <Input
              label="Número"
              name="number"
            />

            <Input
              label="Bairro"
              name="district"
            />

            <Input
              label="Complemento"
              name="complement"
            />

          </div>

        </div>

        <div className="footer">
          <Button
            type="submit"
            label="Criar conta"
            full
          />
        </div>

      </Form>
    </Created>

  </Auth>
);

export default SignUp;
