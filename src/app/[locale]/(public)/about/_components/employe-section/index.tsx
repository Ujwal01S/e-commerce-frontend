"use client";

import { useState } from "react";
import EmployeCard from "@/components/common/employee-card";
import { employeData } from "../../_mock/employe-data";

const EmployeeSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(employeData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentData = employeData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 xs-sm:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 lg:gap-20 justify-center xs-sm:justify-between">
        {currentData.map((data) => (
          <EmployeCard
            key={data.name}
            name={data.name}
            role={data.role}
            imageUrl={data.imageUrl}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`
              w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer
              ${
                index === currentPage
                  ? "bg-orange-500 ring-1 ring-offset-1 ring-[#b3b3b3]"
                  : "bg-[#b3b3b3]"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeSection;
