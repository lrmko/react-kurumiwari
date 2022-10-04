import { FC, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

export const HomeButton: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const navigate = useNavigate();
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    navigate('/');
  };

  return (
    <Box my={my}>
      <Button color="grey" onClick={handleClick} leftIcon={<FaHome />}>
        ホームへ
      </Button>
    </Box>
  );
};
