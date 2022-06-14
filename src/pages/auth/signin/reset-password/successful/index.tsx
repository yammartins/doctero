import Link from 'next/link';
import { AuthLayout } from '~/layouts';
import { Button, Icon } from '~/components';

const Successful: React.FC = () => (
  <AuthLayout
    title="Senha alterada!"
    description="Pronto! Agora é só seguir para o nosso site e acessar sua conta."
  >
    <div className="flex flex-col gap-12 items-center justify-center">
      <Icon
        name="check-circle"
        className="text-[6.125rem] text-green-700"
      />

      <Link href="/auth/signin">
        <Button
          label="Voltar à página inicial"
          full
          className="rounded-2xl"
        />
      </Link>
    </div>

  </AuthLayout>
);

export default Successful;
