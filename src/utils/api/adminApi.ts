import apiClient from "./apiClient";

// 관리자 목록 가져오기
export const fetchAdminList = async (filters: { searchQuery: string; fromDate: string; toDate: string }) => {
  try {
    const response = await apiClient.post("/cms/getAdminList", filters);
    return response.data[0]?.data || [];
  } catch (error) {
    console.error("관리자 목록 불러오기 실패:", error);
    return [];
  }
};
