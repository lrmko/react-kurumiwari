import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CompanyMembers } from 'components/environments/CompanyMembers';
import { Home } from 'components/templates/Home';

export const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/:orgCode/members" element={<CompanyMembers />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
