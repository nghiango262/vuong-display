import React from "react";
import "./Dashboard.css";
//import moment from "moment"
import { calDay } from "./utils/dateUtils";

const Dashboard = ({ datas }) => {

  
  const strDate = "2020-09-10";

  console.log('Value:', calDay(strDate))
  
  return (
    <div className="dashboard">
      <table id="example" style={{ width: "100%" }}>
        <thead>
          <tr id="example">
            <th rowSpan="1" width="150">
              MÃ DỰ ÁN
            </th>
            <th rowSpan="1" width="200">
              TÊN SẢN PHẨM
            </th>
            <th rowSpan="1">Số Lượng</th>
            <th rowSpan="1">TRIỂN KHAI HS KYT</th>
            <th rowSpan="1">NVL CHÍNH</th>
            <th rowSpan="1">GIA CÔNG TP</th>
            <th rowSpan="1">CƠ KHÍ</th>
            <th rowSpan="1">MỘC MÁY</th>
            <th rowSpan="1">SOFA</th>
            <th rowSpan="1">HOÀN THIỆN</th>
            <th rowSpan="1">ĐÓNG GÓI</th>
            <th rowSpan="1">XUẤT HÀNG DK</th>
            <th rowSpan="1">XUẤT HÀNG TT</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{data.maDuAn}</td>
              <td>{data.tenSanPham}</td>
              <td>{data.soLuong}</td>
              <td bgcolor="#00FF00">{data.trienKhaiHsKyt}</td>
              <td bgcolor="#FF0000">{data.nvlChinh}</td>
              <td>{data.giaCongTp}</td>
              <td>{data.coKhi}</td>
              <td>{data.mocMay}</td>
              <td>{data.soFa}</td>
              <td>{data.hoanThien}</td>
              <td>{data.dongGoi}</td>
              <td>{data.xuatHangDK}</td>
              <td>{data.xuatHangTT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
