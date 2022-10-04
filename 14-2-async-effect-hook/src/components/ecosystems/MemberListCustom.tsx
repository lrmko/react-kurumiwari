import { FC } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { useGetMembers } from 'hooks/useGetMembers';
import { UserList } from 'components/organisms/UserList';

type Props = {
  orgCode: string;
};

export const MemberListCustom: FC<Props> = ({ orgCode }) => {
  const { users, isLoading } = useGetMembers(orgCode);

  if (isLoading) {
    return (
      <Flex my={14} h="20rem" justify="center" align="center">
        <Spinner size="xl" color="teal" />
      </Flex>
    );
  }

  return <UserList users={users} />;
};
