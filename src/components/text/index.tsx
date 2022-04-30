import { TextHandles } from './types';

const Text: React.FC<TextHandles> = ({
  types = 'default',
  label,
}) => {
  const models = {
    default: <p>{label}</p>,
    h1: <h1>{label}</h1>,
    h2: <h2>{label}</h2>,
    h3: <h3>{label}</h3>,
    h4: <h4>{label}</h4>,
    span: <span>{label}</span>,
    small: <small>{label}</small>,
  };

  return (

    models[types]

  );
};

export default Text;
