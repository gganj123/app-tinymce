import React from "react";
import { useCMS } from "@/context/CMSContext";
import "./CMSTable.css";

interface Column {
  key: string;
  label: string;
}

const columns: Column[] = [
  { key: "no", label: "No" },
  { key: "createdTime", label: "가입일" },
  { key: "updateTime", label: "최근접속일" },
  { key: "smsYn", label: "문자 수신" },
  { key: "name", label: "이름" },
  { key: "adminId", label: "아이디" },
  { key: "email", label: "이메일" },
  { key: "cellphone", label: "전화번호" },
  { key: "description", label: "비고" },
];

const CMSTable: React.FC = () => {
  const { data } = useCMS();

  return (
    <div className="cms-table-container">
      <table className="cms-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key] || "-"}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="no-data">
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CMSTable;
