import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import apiClient from "../utils/api/apiClient";

// CMS Context 타입 정의
interface CMSContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filters: { searchQuery: string; fromDate: string; toDate: string };
  setFilters: (filters: { searchQuery: string; fromDate: string; toDate: string }) => void;
  data: AdminDataType[];
  setData: (data: AdminDataType[]) => void;
  fetchData: () => void;
}

// 관리자 데이터 타입 정의
interface AdminDataType {
  no: string;
  adminId: string;
  email: string;
  cellphone: string;
  createdTime: string;
  updateTime: string;
  name: string;
  description: string;
  loginTime: string;
  smsYn: string;
}

// Context 생성
const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error("useCMS must be used within a CMSProvider");
  return context;
};

export const CMSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>("관리자 계정 관리");
  const [data, setData] = useState<AdminDataType[]>([]);
  const [filters, setFilters] = useState({
    searchQuery: "",
    fromDate: "",
    toDate: "",
  });
  const fetchData = async () => {
    try {
      console.log("API 요청 URL:", `${process.env.NEXT_PUBLIC_API_BASE_URL}/cms/getAdminList`);
      console.log("요청 파라미터:", filters);

      const response = await apiClient.post("/cms/getAdminList", {
        searchQuery: filters.searchQuery,
        fromDate: filters.fromDate,
        toDate: filters.toDate,
      });

      if (response.data && Array.isArray(response.data) && response.data[0]?.data) {
        setData(response.data[0].data || []);
      } else {
        console.error("Unexpected response structure", response.data);
        setData([]);
      }
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
    }
  };

  return (
    <CMSContext.Provider value={{ activeTab, setActiveTab, filters, setFilters, data, setData, fetchData }}>
      {children}
    </CMSContext.Provider>
  );
};
