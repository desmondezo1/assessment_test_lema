"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IUser } from "@/types";
import Loader from "./Loader";
import EmptyState from "./EmptyState";
import { getUsers } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function UserTable() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", currentPage],
    queryFn: async () => {
      const response = await getUsers(currentPage, 4);
      if (response.success) {
        setSortedUsers(response.data);
      }
      return response.data;
    },
  });

  const formatAddress = (address: IUser["address"]) => {
    return `${address.street}, ${address.state}, ${address.city}, ${address.zipcode}`;
  };

  const [sortedUsers, setSortedUsers] = useState<IUser[]>(data || []);
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const toggleSort = () => {
    setIsSorted(!isSorted);
    const sortedData = data?.sort((a, b) => {
      if (isSorted) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    if (sortedData) setSortedUsers(sortedData);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const generatePaginationItems = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "ellipsis",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "ellipsis",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <h1 className="text-5xl font-bold mb-8 text-[#181D27]">Users</h1>
      <div className="border rounded-md">
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <Loader />
          </div>
        ) : isError ? (
          <EmptyState emptyPromptText="Failed to fetch users." />
        ) : !data || data.length === 0 ? (
          <EmptyState emptyPromptText="No users found." />
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="cursor-pointer pl-6"
                    onClick={toggleSort}
                  >
                    <div className="flex items-center gap-2">Full Name</div>
                  </TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead className="w-[392px]">Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(sortedUsers || data).map((user: IUser) => (
                  <TableRow key={user.id} className="">
                    <TableCell
                      className="py-6 pl-6 cursor-pointer"
                      onClick={() => {
                        router.push(
                          `/user/${user.id}?name=${user.name}&email=${user.email}`
                        );
                      }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="truncate max-w-[392px]">
                      {formatAddress(user.address)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </div>
      {totalPages > 1 && (
        <Pagination className="mt-8 flex flex-row items justify-end text-[#717680]">
          <PaginationContent className="">
            <PaginationItem>
              <PaginationPrevious
                className="text-[#535862]"
                href="#"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              />
            </PaginationItem>
            {generatePaginationItems().map((page, index) => {
              if (page === "ellipsis") {
                return (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              } else {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(page as number)}
                      isActive={currentPage === page}
                      className={
                        currentPage === page
                          ? "text-[#7F56D9] bg-[#F9F5FF]"
                          : ""
                      }
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
            })}
            <PaginationItem>
              <PaginationNext
                className="text-[#535862]"
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
