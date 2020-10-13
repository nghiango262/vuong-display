import React, {useEffect, useState} from "react";
import RowTable from "./RowTable";
import "./Dashboard.css";
//import data from "./data";
//import moment from "moment"
import { calDay } from "./utils/dateUtils";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    //
    const getAllProjects = async () => {
      await fetch("http://localhost:1337/v1/project/public/all")
      .then((response) => response.json())
      .then((result) => setDatas(result.data))
      .catch((error) => console.error(error));
    }
    getAllProjects();
      
      
  }, [])
  
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
          {datas.map(({
            maDuAn,
            tenSanPham,
            soLuong,
            trienKhaiHsKyt,
            nvlChinh,
            giaCongTp,
            coKhi,
            mocMay,
            soFa,
            hoanThien,
            dongGoi,
            xuatHangDK,
            xuatHangTT,
          }) => (
            <tr key={maDuAn}>
              <RowTable label={maDuAn} />
              <RowTable label={tenSanPham} />
              <RowTable label={soLuong} />
              <RowTable label={trienKhaiHsKyt.endDate} bgColor={trienKhaiHsKyt.bgColor} />
              <RowTable label={nvlChinh.endDate} bgColor={nvlChinh.bgColor} />
              
              <td>{giaCongTp? giaCongTp.endDate : ''}</td>
              <td>{coKhi}</td>
              <td>{mocMay}</td>
              <td>{soFa}</td>
              <td>{hoanThien}</td>
              <td>{dongGoi}</td>
              <td>{xuatHangDK}</td>
              <td>{xuatHangTT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
