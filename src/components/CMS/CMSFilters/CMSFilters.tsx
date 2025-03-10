import React, { useState, useEffect } from "react";
import "./CMSFilters.css";
import { useCMS } from "@/context/CMSContext";

const CMSFilters = () => {
  const { filters, setFilters, fetchData } = useCMS();
  const [selectedRange, setSelectedRange] = useState("6개월"); // 기본 선택 값

  const formatDate = (dateStr: string) => {
    return dateStr ? `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}` : "";
  };

  const calculateDateRange = (range: string) => {
    const today = new Date();
    const startDate = new Date();

    if (range === "6개월") startDate.setMonth(today.getMonth() - 6);
    if (range === "1년") startDate.setFullYear(today.getFullYear() - 1);
    if (range === "2년") startDate.setFullYear(today.getFullYear() - 2);

    return {
      fromDate: startDate.toISOString().split("T")[0].replace(/-/g, ""),
      toDate: today.toISOString().split("T")[0].replace(/-/g, ""),
    };
  };

  useEffect(() => {
    const { fromDate, toDate } = calculateDateRange("6개월");
    setFilters((prev) => ({ ...prev, fromDate, toDate }));
  }, []);

  const handleDateRangeChange = (range: string) => {
    if (range === "지정") return;
    setSelectedRange(range);

    const { fromDate, toDate } = calculateDateRange(range);
    setFilters((prev) => ({ ...prev, fromDate, toDate }));
  };

  return (
    <div className="cms-filters">
      <h1 className="cms-title">관리자 회원관리</h1>

      <div className="filters-container">
        <div className="date-filter">
          <label>
            <h3>기간 선택</h3>
          </label>
          <div className="date-input">
            <input type="text" value={`${formatDate(filters.fromDate)} ~ ${formatDate(filters.toDate)}`} readOnly />
            <button
              className={selectedRange === "6개월" ? "active" : ""}
              onClick={() => handleDateRangeChange("6개월")}>
              6개월
            </button>
            <button className={selectedRange === "1년" ? "active" : ""} onClick={() => handleDateRangeChange("1년")}>
              1년
            </button>
            <button className={selectedRange === "2년" ? "active" : ""} onClick={() => handleDateRangeChange("2년")}>
              2년
            </button>
            <button className={selectedRange === "지정" ? "active" : ""}>지정</button>
          </div>
        </div>

        <div className="search-filter">
          <label>검색어</label>
          <div className="search-box">
            <input
              type="text"
              placeholder="검색"
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            />
            <button onClick={fetchData}>조회</button>
          </div>
        </div>
      </div>

      <div className="pagination-container">
        <div className="total-count">34 / 34</div>
        <div className="pagination-controls">
          <select>
            <option>12</option>
            <option>24</option>
            <option>48</option>
          </select>
          <button>{"<"}</button>
          <span>1 / 3</span>
          <button>{">"}</button>
          <button className="excel-btn">엑셀 다운로드</button>
        </div>
      </div>
    </div>
  );
};

export default CMSFilters;
