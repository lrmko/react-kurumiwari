import { FC } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { capitalize } from 'utils/string';
// import { MemberList } from 'components/ecosystems/MemberList';
import { MemberListCustom } from 'components/ecosystems/MemberListCustom';
import { HomeButton } from 'components/organisms/HomrButton';

type Props = {
  orgCode: string;
};

export const CompanyMembers: FC<Props> = ({ orgCode }) => {
  const pageTitle = `${capitalize(orgCode) || '***'}の開発メンバー`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <Heading as="h1">{pageTitle}</Heading>
      </header>
      <Center>{orgCode && <MemberListCustom orgCode={orgCode} />}</Center>
      <HomeButton my={12} />
    </>
  );
};
