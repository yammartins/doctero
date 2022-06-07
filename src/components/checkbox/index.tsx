import { CheckboxHandles } from "./types";
import { Text } from '~/components';

const Checkbox: React.FC<CheckboxHandles> = ({ label }) => {


  return (
    <div className="checkbox">
      <input
          type="checkbox"
          name=""
          id=""
      />

      <div className="checkbox-wrapper">
        <span />
      </div>

      <Text
       label={label}
       size="sm"
       className="text-gray-500"
      />
    </div>
  );
};

export default Checkbox;
