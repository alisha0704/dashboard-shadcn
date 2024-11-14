/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Genre Preference"
  },
  {
    accessorKey: "method",
    header: "Genre"
  }
];

const data: Payment[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    lastOrder: "75%",
    method: "Action"
  },
  {
    name: "Alice Smith",
    email: "alice@gmail.com",
    lastOrder: "80%",
    method: "Horror"
  },
  {
    name: "Bob Johnson",
    email: "bob@egmail.com",
    lastOrder: "85%",
    method: "Horror"
  },
  {
    name: "Emma Brown",
    email: "emma@gmail.com",
    lastOrder: "70%",
    method: "Romance"
  },
  {
    name: "Michael Davis",
    email: "michael@gmail.com",
    lastOrder: "68%",
    method: "Adventure"
  },
  {
    name: "Sophia Wilson",
    email: "sophia@gmail.com",
    lastOrder: "73%",
    method: "Action"
  },
  {
    name: "Liam Garcia",
    email: "liam@gmail.com",
    lastOrder: "82%",
    method: "Romance"
  },
  {
    name: "Olivia Martinez",
    email: "olivia@gmail.com",
    lastOrder: "69%",
    method: "Drama"
  },
  {
    name: "Noah Rodriguez",
    email: "noah@gmail.com",
    lastOrder: "67%",
    method: "Romance"
  },
  {
    name: "Ava Lopez",
    email: "ava@gmail.com",
    lastOrder: "82%",
    method: "Thriller"
  },
  {
    name: "Elijah Hernandez",
    email: "elijah@gmail.com",
    lastOrder: "93%",
    method: "Comedy"
  },
  {
    name: "Mia Gonzalez",
    email: "mia@gmail.com",
    lastOrder: "78%",
    method: "Romance"
  },
  {
    name: "James Perez",
    email: "james@gmail.com",
    lastOrder: "85%",
    method: "Thriller"
  },
  {
    name: "Charlotte Carter",
    email: "charlotte@gmail.com",
    lastOrder: "90%",
    method: "Horror"
  },
  {
    name: "Benjamin Taylor",
    email: "benjamin@gmail.com",
    lastOrder: "75%",
    method: "Action"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
