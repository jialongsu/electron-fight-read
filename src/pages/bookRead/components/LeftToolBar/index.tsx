import { FC, memo } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { StyledLeftToolBar } from './styled';
import Box from '../Box';

const LeftToolBar: FC = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <StyledLeftToolBar>
      <Box icon={ArrowLeftOutlined} name='返回' callback={onBack} />
    </StyledLeftToolBar>
  );
};

export default memo(LeftToolBar);
