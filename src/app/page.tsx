/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Users",
    amount: "781",
    discription: "+20.1% from last month",
    icon: Users
  },
  {
    label: "Total Impressions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Total Genres",
    amount: "+12",
    discription: "+18% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+173",
    discription: "+67 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@gmail.com",
    saleAmount: "Comedy"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@gmail.com",
    saleAmount: "Romance"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@gmail.com",
    saleAmount: "Drama"
  },
  {
    name: "William Kim",
    email: "will@gmail.com",
    saleAmount: "Action"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@gmail.com",
    saleAmount: "Comedy"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full" >
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Users</p>
            <p className="text-sm text-gray-400">
              You onboarded 150 new users this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
