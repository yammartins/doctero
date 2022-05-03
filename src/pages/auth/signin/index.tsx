import { Form } from '@unform/web';
import Link from 'next/link';

import { Input, Button } from '~/components';
import { Text } from '~/components';
import { Auth } from '~/layouts';
import { Login } from '~/styles';

const SignIn: React.FC = () => (
  <Auth
    title="Bem-vindo!"
    description="Insira seus dados para continuar"
  >
    <Login>
      <Form
        className="form-signin"
        onSubmit={() => {}}
      >
        <div className="input-box">

          <Input
            name="email"
            icon="email"
            label="E-mail"
          />

          <Input
            name="password"
            icon="password"
            label="Senha"
            type="password"
          />

          <Link href="/">
            <a>Esqueci minha senha</a>
          </Link>

        </div>

        <div className="footer">
          <Button
            type="submit"
            label="Entrar"
            full
            appearance="secondary"
          />

          <Text
            type="p"
            size="sm"
            weight="500"
            align="center"
          >
            Você ainda não é um de nós?
            <Link href="/auth/signup">
              <a>Registrar-se</a>
            </Link>
          </Text>
        </div>
      </Form>
    </Login>
  </Auth>
);

export default SignIn;
