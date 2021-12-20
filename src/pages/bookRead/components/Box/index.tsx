import { FC, useRef } from 'react';
import { StyledBox, StyledIcon } from './styled';

interface P {
  icon: React.ForwardRefExoticComponent<any>;
  name: string;
  className?: string;
  callback?: (state: boolean) => void;
}

const Box: FC<P> = ({
  icon,
  name,
  callback,
  className,
  ...props
}) => {
  const stateRef = useRef(false);

  const onTapItem = () => {
    stateRef.current = !stateRef.current;
    callback && callback(stateRef.current);
  };

  return (
    <StyledBox className={className} onClick={onTapItem} {...props}>
      <StyledIcon Icon={icon} />
      <div>{name}</div>
    </StyledBox>
  );
};

export default Box;
