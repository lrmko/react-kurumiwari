import { FC, useState, useEffect } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { getMembers, User } from 'domains/github';
import { UserList } from 'components/organisms/UserList';

type Props = {
  orgCode: string;
};

export const MemberList: FC<Props> = ({ orgCode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const usersData = await getMembers(orgCode);
        setUsers(usersData);
      } catch (error) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [orgCode]);

  if (isLoading) {
    return (
      <Flex my={14} h="20rem" justify="center" align="center">
        <Spinner size="xl" color="teal" />
      </Flex>
    );
  }

  return <UserList users={users} />;
};
