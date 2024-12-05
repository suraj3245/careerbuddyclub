import React from 'react';
import Wrapper from '@/layouts/wrapper';
import CandidateDashboardMain from '@/app/components/dashboard/candidate';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidate Dashboard",
};

const CandidateDashboardPage = () => {
  return (
    <Wrapper>
      <CandidateDashboardMain />
    </Wrapper>
  );
};

export default CandidateDashboardPage;