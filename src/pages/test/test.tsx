import LayoutPages from "@/components/layout";
import Link from "next/link";

import React, { useState, useEffect, ReactNode } from 'react';


interface Backupsever {
  [x: string]: ReactNode;
  id: number;
  activityImg: string;
  activityTitle: string;
  activitySubDetail: string;
  // Add other properties if there are more
}


export default function Activity() {
  const initialVisibleItems = 3;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [backupseverData, setBackupseverData] = useState<Backupsever[]>([]); // Use the defined interface here
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  useEffect(() => {
    fetch('/api/backupsever')
      .then((response) => response.json())
      .then((data) => {
        setBackupseverData(data.backupsever);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      });
  }, []);


  return (
 <>
  <LayoutPages>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ลำดับ
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        วันที่
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        จัดการ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {backupseverData.slice(0, visibleItems).map((backupsever, index) => (
    <tr key={index}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {index + 1}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">
    {backupsever.date}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">

    </td>
  </tr>
  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutPages>
 
 </>
  );
}


// {backupsever.name}


// {backupseverData.slice(0, visibleItems).map((backupsever) => (
              
//     ))}\





// {backupseverData.slice(0, visibleItems).map((backupsever, index) => (
//     <tr key={index}>
//     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//       {index + 1}
//     </td>
//     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">
//     {backupsever.name}
//     </td>
//     <td className="px-6 py-4 whitespace-nowrap">

//     </td>
//   </tr>
//   ))}