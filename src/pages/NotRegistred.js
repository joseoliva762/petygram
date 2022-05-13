import React from 'react';
import { useUser } from '@hooks/useUser';
import { SingIn } from '@containers/SingIn';
import { SingUp } from '@containers/SignUp';
import { Meta } from '@components/Meta';

export default function NotRegistred() {
  const { user } = useUser();
  const titleContent = user.needRegister ? 'Registrate' : 'Inicia sesión';
  const descriptionContemt = user.needRegister ? 'Crea tu cuenta para poder disfrutar de todos los beneficios de Patgram' : 'Inicia sesión para poder disfrutar de todos los beneficios de Patgram';

  return (
    <>
      <Meta title={titleContent} description={descriptionContemt} />
      {user.needRegister ? <SingUp /> : <SingIn />}
    </>
  );
}
