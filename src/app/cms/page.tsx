"use client";

import CMSFilters from "@/components/CMS/CMSFilters/CMSFilters";
import CMSLayout from "@/components/CMS/CMSLayout/CMSLayout";
import CMSTable from "@/components/CMS/CMSTable/CMSTable";

import { CMSProvider } from "@/context/CMSContext";

const AdminDashboard = () => {
  return (
    <CMSProvider>
      <CMSLayout tabs={["관리자 회원 관리", "상품 관리", "주문 관리"]}>
        <CMSFilters />
        <CMSTable />
      </CMSLayout>
    </CMSProvider>
  );
};

export default AdminDashboard;
