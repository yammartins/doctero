import { Form } from '@unform/web';
import Link from 'next/link';

import { Input, Button } from '~/components';
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
          />

          <Link href="/auth/signup">
            <a>Não tem conta ainda? Seja um de nós!</a>
          </Link>

        </div>
      </Form>
    </Login>
  </Auth>
);

export default SignIn;
