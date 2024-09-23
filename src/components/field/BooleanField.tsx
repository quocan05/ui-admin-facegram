import { IconMark, IconXMark } from 'src/assets/icons';

type Props = {
  checked: boolean;
};

const BooleanField = (props: Props) => {
  const { checked } = props;
  return <div className="text-primary">{checked ? <IconMark /> : <IconXMark />}</div>;
};

export default BooleanField;
