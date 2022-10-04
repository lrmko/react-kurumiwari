import { useState, useEffect } from 'react';
import { getMembers, User } from 'domains/github';

type ReturnType = {
  users: User[];
  isLoading: boolean;
};

export const useGetMembers = (orgCode: string): ReturnType => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const usersData = await getMembers(orgCode);
        setUsers(usersData);
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [orgCode]);

  return { users, isLoading };
};
