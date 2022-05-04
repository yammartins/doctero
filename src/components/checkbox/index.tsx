import { Text } from '../index';
import View from './styles';
import { CheckboxHandles } from './types';

const Checkbox: React.FC<CheckboxHandles> = ({
  label,
  sizes = 'base',
  weight = '400',
  ...rest
}) => (
  <View>
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        name="checkbox"
      />
      <Text
        {...rest}
        type="p"
        label={label}
        weight={weight}
        size={sizes}
      />
    </div>
  </View>
);

export default Checkbox;
