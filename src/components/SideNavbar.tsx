
/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  DownloadCloud,
  MessageCircle,
  Mail
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  // Toggle sidebar collapse state
  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  // Download PDF function
  // function downloadPdf() {
  //   const pdfUrl = "/alisha exc.docx_compressed.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "analysis_data.pdf"; // Downloaded file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  function downloadCsv() {
    const csvUrl = "/analysis_data.csv"; // Replace with the correct path to your CSV file
    const link = document.createElement("a");
    link.href = csvUrl;
    link.download = "analysis_data.csv"; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  // Send emails function
  async function handleSendEmails() {
    const emailData = [
      {
        recipient: "prakhargupta0607@gmail.com",
        genre: "Action",
        movies: ["Movie A", "Movie B", "Movie C"],
      },
      {
        recipient: "rkashish0406@gmail.com",
        genre: "Comedy",
        movies: ["Movie X", "Movie Y", "Movie Z"],
      },
      {
        recipient: "alishabandyopadhyay07@gmail.com",
        genre: "Romance",
        movies: ["Movie G", "Movie H", "Movie I"],
      },
    ];

    try {
      const response = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailData }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Emails sent successfully!");
      } else {
        alert(`Failed to send emails: ${data.message}`);
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      alert("An error occurred while sending the emails.");
    }
  }

  return (
    <div
      className={`relative min-w-[120px] border-r px-4 pb-10 pt-24 flex flex-col justify-between ${isCollapsed ? "w-[80px]" : "w-[200px]"
        }`}
    >
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Metrics",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
      {/* Button to send emails */}
      <div className={`mt-10 ${isCollapsed ? "hidden" : ""}`}>
        <Button
          onClick={handleSendEmails}
          variant="outline"
          className="w-full flex items-center justify-center space-x-2 overflow-visible"
        >
          <MessageCircle className="shrink-0" />
          <span className="truncate">Roll Out<br></br> Feedback</span>
        </Button>
      </div>
      {/* Button to download PDF */}
      <div className="mt-auto">
        <Button onClick={downloadCsv} variant="default" className="w-full mt-4">
          <DownloadCloud className="mr-2" />
          <span className="truncate my-2">Download<br></br>PDF</span>
        </Button>
      </div>
    </div>
  );
}
