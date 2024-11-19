// /**
//  * eslint-disable @next/next/no-img-element
//  *
//  * @format
//  */

// /**
//  * eslint-disable @next/next/no-img-element
//  *
//  * @format
//  */

// /** @format */
// "use client";

// // import { DataTable } from "@/components/DataTable";
// // import { ColumnDef } from "@tanstack/react-table";
// // import React from "react";
// // import PageTitle from "@/components/PageTitle";
// // import { cn } from "@/lib/utils";

// // type Props = {};
// // type Payment = {
// //   campaign: string;
// //   startdate: string;
// //   enddate: string;
// //   targetemotion: string;
// //   engagement: string;
// //   status: string;
// //   action:string;
// // };

// // const columns: ColumnDef<Payment>[] = [
// //   {
// //     accessorKey: "campaign",
// //     header: "Campaign Name"
// //   },
// //   {
// //     accessorKey: "startdate",
// //     header: "Start Date"
// //   },
// //   {
// //     accessorKey: "enddate",
// //     header: "End Date"
// //   },
// //   {
// //     accessorKey: "targetemotion",
// //     header: "Target Emotion"
// //   },
// //   {
// //     accessorKey: "engagement",
// //     header: "Engagement Rate"
// //   },
// //   {
// //     accessorKey: "status",
// //     header: "Status",
// //     cell: ({ row }) => {
// //       return (
// //         <div
// //           className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
// //             "bg-red-200": row.getValue("status") === "Archived",
// //             "bg-orange-200": row.getValue("status") === "Active",
// //             "bg-green-200": row.getValue("status") === "Completed"
// //           })}
// //         >
// //           {row.getValue("status")}
// //         </div>
// //       );
// //     }
// //   },
// //   {
// //     accessorKey: "action",
// //     header: "Action"
// //   },
// // ];

// // const data: Payment[] = [
// //   {
// //     campaign: "Laugh Riot",
// //     startdate: "2023-10-01",
// //     enddate: "2023-10-31",
// //     targetemotion: "Joy",
// //     engagement: "78.5",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Romantic Moments",
// //     startdate: "2023-11-01",
// //     enddate: "2023-11-15",
// //     targetemotion: "Love",
// //     engagement: "65.4",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Thrill Zone",
// //     startdate: "2023-09-15",
// //     enddate: "2023-10-10",
// //     targetemotion: "Excitement",
// //     engagement: "80.2",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Feel-Good Fridays",
// //     startdate: "2023-11-05",
// //     enddate: "2023-11-20",
// //     targetemotion: "Happiness",
// //     engagement: "72.1",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Emotional Depth",
// //     startdate: "2023-08-20",
// //     enddate: "2023-09-05",
// //     targetemotion: "Sadness",
// //     engagement: "50.3",
// //     status: "Archived",
// //     action: "Reactivate",
// //   },
// //   {
// //     campaign: "Adventure Seekers",
// //     startdate: "2023-07-01",
// //     enddate: "2023-07-15",
// //     targetemotion: "Thrill",
// //     engagement: "85.1",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Soulful Evenings",
// //     startdate: "2023-06-20",
// //     enddate: "2023-06-30",
// //     targetemotion: "Peace",
// //     engagement: "68.2",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Weekend Vibes",
// //     startdate: "2023-04-15",
// //     enddate: "2023-04-30",
// //     targetemotion: "Relaxation",
// //     engagement: "55.6",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Inspiration Hub",
// //     startdate: "2023-03-10",
// //     enddate: "2023-03-25",
// //     targetemotion: "Motivation",
// //     engagement: "77.4",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Chill & Thrill",
// //     startdate: "2023-02-01",
// //     enddate: "2023-02-14",
// //     targetemotion: "Excitement",
// //     engagement: "82.9",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Family Moments",
// //     startdate: "2023-01-10",
// //     enddate: "2023-01-20",
// //     targetemotion: "Love",
// //     engagement: "63.2",
// //     status: "Archived",
// //     action: "Reactivate",
// //   },
// //   {
// //     campaign: "Celebration Times",
// //     startdate: "2022-12-20",
// //     enddate: "2022-12-31",
// //     targetemotion: "Joy",
// //     engagement: "70.5",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Serenity Now",
// //     startdate: "2022-11-15",
// //     enddate: "2022-11-30",
// //     targetemotion: "Calm",
// //     engagement: "60.8",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Mindful Moments",
// //     startdate: "2022-10-01",
// //     enddate: "2022-10-15",
// //     targetemotion: "Mindfulness",
// //     engagement: "67.3",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Playful Days",
// //     startdate: "2022-09-10",
// //     enddate: "2022-09-20",
// //     targetemotion: "Happiness",
// //     engagement: "73.9",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Energy Boost",
// //     startdate: "2022-08-01",
// //     enddate: "2022-08-15",
// //     targetemotion: "Excitement",
// //     engagement: "79.0",
// //     status: "Active",
// //     action: "Pause",
// //   }
// // ];


// // export default function OrdersPage({}: Props) {
// //   return (
// //     <div className="flex flex-col gap-5  w-full">
// //       <PageTitle title="Campaign Performance Metrics" />
// //       <DataTable columns={columns} data={data} />
// //     </div>
// //   );
// // }




// import { DataTable } from "@/components/DataTable";
// import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
// import PageTitle from "@/components/PageTitle";
// import { cn } from "@/lib/utils";

// type Props = {};
// type Payment = {
//   campaign: string;
//   startdate: string;
//   enddate: string;
//   targetemotion: string;
//   engagement: string;
//   status: string;
//   action: string;
// };

// const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "campaign",
//     header: "Campaign Name"
//   },
//   {
//     accessorKey: "startdate",
//     header: "Start Date"
//   },
//   {
//     accessorKey: "enddate",
//     header: "End Date"
//   },
//   {
//     accessorKey: "targetemotion",
//     header: "Target Emotion"
//   },
//   {
//     accessorKey: "engagement",
//     header: "Engagement Rate(%)"
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       return (
//         <div
//           className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
//             "bg-red-400": row.getValue("status") === "Paused",
//             "bg-green-300": row.getValue("status") === "Active",
//           })}
//         >
//           {row.getValue("status")}
//         </div>
//       );
//     }
//   },
//   {
//     accessorKey: "action",
//     header: "Action",
//     cell: ({ row }) => (
//       <div className="flex gap-2">
//         <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
//           {row.getValue("action")}
//         </button>
//       </div>
//     )
//   }
// ];

// const data: Payment[] = [
//   {
//     campaign: "Laugh Riot",
//     startdate: "2023-10-01",
//     enddate: "2023-10-31",
//     targetemotion: "Joy",
//     engagement: "78.5",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Romantic Moments",
//     startdate: "2023-11-01",
//     enddate: "2023-11-15",
//     targetemotion: "Love",
//     engagement: "65.4",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Thrill Zone",
//     startdate: "2023-09-15",
//     enddate: "2023-10-10",
//     targetemotion: "Excitement",
//     engagement: "80.2",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Feel-Good Fridays",
//     startdate: "2023-11-05",
//     enddate: "2023-11-20",
//     targetemotion: "Happiness",
//     engagement: "72.1",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Emotional Depth",
//     startdate: "2023-08-20",
//     enddate: "2023-09-05",
//     targetemotion: "Sadness",
//     engagement: "50.3",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//         campaign: "Adventure Seekers",
//         startdate: "2023-07-01",
//         enddate: "2023-07-15",
//         targetemotion: "Thrill",
//         engagement: "85.1",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Soulful Evenings",
//         startdate: "2023-06-20",
//         enddate: "2023-06-30",
//         targetemotion: "Peace",
//         engagement: "68.2",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Weekend Vibes",
//         startdate: "2023-04-15",
//         enddate: "2023-04-30",
//         targetemotion: "Relaxation",
//         engagement: "55.6",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Inspiration Hub",
//         startdate: "2023-03-10",
//         enddate: "2023-03-25",
//         targetemotion: "Motivation",
//         engagement: "77.4",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Chill & Thrill",
//         startdate: "2023-02-01",
//         enddate: "2023-02-14",
//         targetemotion: "Excitement",
//         engagement: "82.9",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Family Moments",
//         startdate: "2023-01-10",
//         enddate: "2023-01-20",
//         targetemotion: "Love",
//         engagement: "63.2",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Celebration Times",
//         startdate: "2022-12-20",
//         enddate: "2022-12-31",
//         targetemotion: "Joy",
//         engagement: "70.5",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Serenity Now",
//         startdate: "2022-11-15",
//         enddate: "2022-11-30",
//         targetemotion: "Calm",
//         engagement: "60.8",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Mindful Moments",
//         startdate: "2022-10-01",
//         enddate: "2022-10-15",
//         targetemotion: "Mindfulness",
//         engagement: "67.3",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Playful Days",
//         startdate: "2022-09-10",
//         enddate: "2022-09-20",
//         targetemotion: "Happiness",
//         engagement: "73.9",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Energy Boost",
//         startdate: "2022-08-01",
//         enddate: "2022-08-15",
//         targetemotion: "Excitement",
//         engagement: "79.0",
//         status: "Active",
//         action: "Post",
//       }
// ];

// export default function OrdersPage({}: Props) {
//   return (
//     <div className="flex flex-col gap-5 w-full">
//       <PageTitle title="Campaign Performance Metrics" />
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }





// /**
//  * @format
//  */
// "use client";

// import { DataTable } from "@/components/DataTable";
// import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
// import PageTitle from "@/components/PageTitle";
// import { cn } from "@/lib/utils";

// type Props = {};
// type Payment = {
//   campaign: string;
//   startdate: string;
//   enddate: string;
//   targetemotion: string;
//   engagement: string;
//   status: string;
//   action: string;
// };

// // Function to send an email to multiple recipients
// const sendOrderFeedback = async (row: { campaign: any; startdate: any; enddate: any; targetemotion: any; engagement: any; status?: string; action?: string; }) => {
//   const recipients = ["prakhargupta0607@gmail.com", "rkashish0406@gmail.com"]; // Add the two recipients here
//   const campaignDetails = `Campaign: ${row.campaign}\nStart Date: ${row.startdate}\nEnd Date: ${row.enddate}\nEngagement: ${row.engagement}%`;
//   try {
//     const response = await fetch("/api/sendOrderFeedback", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         recipients,
//         genre: row.targetemotion,
//         campaignDetails,
//       }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert(`Emails sent successfully for campaign "${row.campaign}"!`);
//     } else {
//       alert(`Failed to send emails: ${data.message}`);
//     }
//   } catch (error) {
//     console.error("Error sending emails:", error);
//     alert("An error occurred while sending the emails.");
//   }
// };

// const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "campaign",
//     header: "Campaign Name",
//   },
//   {
//     accessorKey: "startdate",
//     header: "Start Date",
//   },
//   {
//     accessorKey: "enddate",
//     header: "End Date",
//   },
//   {
//     accessorKey: "targetemotion",
//     header: "Target Emotion",
//   },
//   {
//     accessorKey: "engagement",
//     header: "Engagement Rate(%)",
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       return (
//         <div
//           className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
//             "bg-red-400": row.getValue("status") === "Paused",
//             "bg-green-300": row.getValue("status") === "Active",
//           })}
//         >
//           {row.getValue("status")}
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "action",
//     header: "Action",
//     cell: ({ row }) => (
//       <div className="flex gap-2">
//         <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800">
//           {row.getValue("action")}
//         </button>
//       </div>
//     ),
//   },
// ];

// const data: Payment[] = [
//   {
//     campaign: "Laugh Riot",
//     startdate: "2023-10-01",
//     enddate: "2023-10-31",
//     targetemotion: "Joy",
//     engagement: "78.5",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Romantic Moments",
//     startdate: "2023-11-01",
//     enddate: "2023-11-15",
//     targetemotion: "Love",
//     engagement: "65.4",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Thrill Zone",
//     startdate: "2023-09-15",
//     enddate: "2023-10-10",
//     targetemotion: "Excitement",
//     engagement: "80.2",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Feel-Good Fridays",
//     startdate: "2023-11-05",
//     enddate: "2023-11-20",
//     targetemotion: "Happiness",
//     engagement: "72.1",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Emotional Depth",
//     startdate: "2023-08-20",
//     enddate: "2023-09-05",
//     targetemotion: "Sadness",
//     engagement: "50.3",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Adventure Seekers",
//     startdate: "2023-07-01",
//     enddate: "2023-07-15",
//     targetemotion: "Thrill",
//     engagement: "85.1",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Soulful Evenings",
//     startdate: "2023-06-20",
//     enddate: "2023-06-30",
//     targetemotion: "Peace",
//     engagement: "68.2",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Weekend Vibes",
//     startdate: "2023-04-15",
//     enddate: "2023-04-30",
//     targetemotion: "Relaxation",
//     engagement: "55.6",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Inspiration Hub",
//     startdate: "2023-03-10",
//     enddate: "2023-03-25",
//     targetemotion: "Motivation",
//     engagement: "77.4",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Chill & Thrill",
//     startdate: "2023-02-01",
//     enddate: "2023-02-14",
//     targetemotion: "Excitement",
//     engagement: "82.9",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Family Moments",
//     startdate: "2023-01-10",
//     enddate: "2023-01-20",
//     targetemotion: "Love",
//     engagement: "63.2",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Celebration Times",
//     startdate: "2022-12-20",
//     enddate: "2022-12-31",
//     targetemotion: "Joy",
//     engagement: "70.5",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Serenity Now",
//     startdate: "2022-11-15",
//     enddate: "2022-11-30",
//     targetemotion: "Calm",
//     engagement: "60.8",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Mindful Moments",
//     startdate: "2022-10-01",
//     enddate: "2022-10-15",
//     targetemotion: "Mindfulness",
//     engagement: "67.3",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Playful Days",
//     startdate: "2022-09-10",
//     enddate: "2022-09-20",
//     targetemotion: "Happiness",
//     engagement: "73.9",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Energy Boost",
//     startdate: "2022-08-01",
//     enddate: "2022-08-15",
//     targetemotion: "Excitement",
//     engagement: "79.0",
//     status: "Active",
//     action: "Post",
//   },
// ];

// export default function OrdersPage({ }: Props) {
//   return (
//     <div className="flex flex-col gap-5 w-full">
//       <PageTitle title="Campaign Performance Metrics" />
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }


// /**
//  * eslint-disable @next/next/no-img-element
//  *
//  * @format
//  */

// /**
//  * eslint-disable @next/next/no-img-element
//  *
//  * @format
//  */

// /** @format */
// "use client";

// // import { DataTable } from "@/components/DataTable";
// // import { ColumnDef } from "@tanstack/react-table";
// // import React from "react";
// // import PageTitle from "@/components/PageTitle";
// // import { cn } from "@/lib/utils";

// // type Props = {};
// // type Payment = {
// //   campaign: string;
// //   startdate: string;
// //   enddate: string;
// //   targetemotion: string;
// //   engagement: string;
// //   status: string;
// //   action:string;
// // };

// // const columns: ColumnDef<Payment>[] = [
// //   {
// //     accessorKey: "campaign",
// //     header: "Campaign Name"
// //   },
// //   {
// //     accessorKey: "startdate",
// //     header: "Start Date"
// //   },
// //   {
// //     accessorKey: "enddate",
// //     header: "End Date"
// //   },
// //   {
// //     accessorKey: "targetemotion",
// //     header: "Target Emotion"
// //   },
// //   {
// //     accessorKey: "engagement",
// //     header: "Engagement Rate"
// //   },
// //   {
// //     accessorKey: "status",
// //     header: "Status",
// //     cell: ({ row }) => {
// //       return (
// //         <div
// //           className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
// //             "bg-red-200": row.getValue("status") === "Archived",
// //             "bg-orange-200": row.getValue("status") === "Active",
// //             "bg-green-200": row.getValue("status") === "Completed"
// //           })}
// //         >
// //           {row.getValue("status")}
// //         </div>
// //       );
// //     }
// //   },
// //   {
// //     accessorKey: "action",
// //     header: "Action"
// //   },
// // ];

// // const data: Payment[] = [
// //   {
// //     campaign: "Laugh Riot",
// //     startdate: "2023-10-01",
// //     enddate: "2023-10-31",
// //     targetemotion: "Joy",
// //     engagement: "78.5",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Romantic Moments",
// //     startdate: "2023-11-01",
// //     enddate: "2023-11-15",
// //     targetemotion: "Love",
// //     engagement: "65.4",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Thrill Zone",
// //     startdate: "2023-09-15",
// //     enddate: "2023-10-10",
// //     targetemotion: "Excitement",
// //     engagement: "80.2",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Feel-Good Fridays",
// //     startdate: "2023-11-05",
// //     enddate: "2023-11-20",
// //     targetemotion: "Happiness",
// //     engagement: "72.1",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Emotional Depth",
// //     startdate: "2023-08-20",
// //     enddate: "2023-09-05",
// //     targetemotion: "Sadness",
// //     engagement: "50.3",
// //     status: "Archived",
// //     action: "Reactivate",
// //   },
// //   {
// //     campaign: "Adventure Seekers",
// //     startdate: "2023-07-01",
// //     enddate: "2023-07-15",
// //     targetemotion: "Thrill",
// //     engagement: "85.1",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Soulful Evenings",
// //     startdate: "2023-06-20",
// //     enddate: "2023-06-30",
// //     targetemotion: "Peace",
// //     engagement: "68.2",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Weekend Vibes",
// //     startdate: "2023-04-15",
// //     enddate: "2023-04-30",
// //     targetemotion: "Relaxation",
// //     engagement: "55.6",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Inspiration Hub",
// //     startdate: "2023-03-10",
// //     enddate: "2023-03-25",
// //     targetemotion: "Motivation",
// //     engagement: "77.4",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Chill & Thrill",
// //     startdate: "2023-02-01",
// //     enddate: "2023-02-14",
// //     targetemotion: "Excitement",
// //     engagement: "82.9",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Family Moments",
// //     startdate: "2023-01-10",
// //     enddate: "2023-01-20",
// //     targetemotion: "Love",
// //     engagement: "63.2",
// //     status: "Archived",
// //     action: "Reactivate",
// //   },
// //   {
// //     campaign: "Celebration Times",
// //     startdate: "2022-12-20",
// //     enddate: "2022-12-31",
// //     targetemotion: "Joy",
// //     engagement: "70.5",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Serenity Now",
// //     startdate: "2022-11-15",
// //     enddate: "2022-11-30",
// //     targetemotion: "Calm",
// //     engagement: "60.8",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Mindful Moments",
// //     startdate: "2022-10-01",
// //     enddate: "2022-10-15",
// //     targetemotion: "Mindfulness",
// //     engagement: "67.3",
// //     status: "Active",
// //     action: "Pause",
// //   },
// //   {
// //     campaign: "Playful Days",
// //     startdate: "2022-09-10",
// //     enddate: "2022-09-20",
// //     targetemotion: "Happiness",
// //     engagement: "73.9",
// //     status: "Completed",
// //     action: "View Details",
// //   },
// //   {
// //     campaign: "Energy Boost",
// //     startdate: "2022-08-01",
// //     enddate: "2022-08-15",
// //     targetemotion: "Excitement",
// //     engagement: "79.0",
// //     status: "Active",
// //     action: "Pause",
// //   }
// // ];


// // export default function OrdersPage({}: Props) {
// //   return (
// //     <div className="flex flex-col gap-5  w-full">
// //       <PageTitle title="Campaign Performance Metrics" />
// //       <DataTable columns={columns} data={data} />
// //     </div>
// //   );
// // }




// import { DataTable } from "@/components/DataTable";
// import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
// import PageTitle from "@/components/PageTitle";
// import { cn } from "@/lib/utils";

// type Props = {};
// type Payment = {
//   campaign: string;
//   startdate: string;
//   enddate: string;
//   targetemotion: string;
//   engagement: string;
//   status: string;
//   action: string;
// };

// const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "campaign",
//     header: "Campaign Name"
//   },
//   {
//     accessorKey: "startdate",
//     header: "Start Date"
//   },
//   {
//     accessorKey: "enddate",
//     header: "End Date"
//   },
//   {
//     accessorKey: "targetemotion",
//     header: "Target Emotion"
//   },
//   {
//     accessorKey: "engagement",
//     header: "Engagement Rate(%)"
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       return (
//         <div
//           className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
//             "bg-red-400": row.getValue("status") === "Paused",
//             "bg-green-300": row.getValue("status") === "Active",
//           })}
//         >
//           {row.getValue("status")}
//         </div>
//       );
//     }
//   },
//   {
//     accessorKey: "action",
//     header: "Action",
//     cell: ({ row }) => (
//       <div className="flex gap-2">
//         <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
//           {row.getValue("action")}
//         </button>
//       </div>
//     )
//   }
// ];

// const data: Payment[] = [
//   {
//     campaign: "Laugh Riot",
//     startdate: "2023-10-01",
//     enddate: "2023-10-31",
//     targetemotion: "Joy",
//     engagement: "78.5",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Romantic Moments",
//     startdate: "2023-11-01",
//     enddate: "2023-11-15",
//     targetemotion: "Love",
//     engagement: "65.4",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Thrill Zone",
//     startdate: "2023-09-15",
//     enddate: "2023-10-10",
//     targetemotion: "Excitement",
//     engagement: "80.2",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//     campaign: "Feel-Good Fridays",
//     startdate: "2023-11-05",
//     enddate: "2023-11-20",
//     targetemotion: "Happiness",
//     engagement: "72.1",
//     status: "Active",
//     action: "Post",
//   },
//   {
//     campaign: "Emotional Depth",
//     startdate: "2023-08-20",
//     enddate: "2023-09-05",
//     targetemotion: "Sadness",
//     engagement: "50.3",
//     status: "Paused",
//     action: "Post",
//   },
//   {
//         campaign: "Adventure Seekers",
//         startdate: "2023-07-01",
//         enddate: "2023-07-15",
//         targetemotion: "Thrill",
//         engagement: "85.1",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Soulful Evenings",
//         startdate: "2023-06-20",
//         enddate: "2023-06-30",
//         targetemotion: "Peace",
//         engagement: "68.2",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Weekend Vibes",
//         startdate: "2023-04-15",
//         enddate: "2023-04-30",
//         targetemotion: "Relaxation",
//         engagement: "55.6",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Inspiration Hub",
//         startdate: "2023-03-10",
//         enddate: "2023-03-25",
//         targetemotion: "Motivation",
//         engagement: "77.4",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Chill & Thrill",
//         startdate: "2023-02-01",
//         enddate: "2023-02-14",
//         targetemotion: "Excitement",
//         engagement: "82.9",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Family Moments",
//         startdate: "2023-01-10",
//         enddate: "2023-01-20",
//         targetemotion: "Love",
//         engagement: "63.2",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Celebration Times",
//         startdate: "2022-12-20",
//         enddate: "2022-12-31",
//         targetemotion: "Joy",
//         engagement: "70.5",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Serenity Now",
//         startdate: "2022-11-15",
//         enddate: "2022-11-30",
//         targetemotion: "Calm",
//         engagement: "60.8",
//         status: "Paused",
//         action: "Post",
//       },
//       {
//         campaign: "Mindful Moments",
//         startdate: "2022-10-01",
//         enddate: "2022-10-15",
//         targetemotion: "Mindfulness",
//         engagement: "67.3",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Playful Days",
//         startdate: "2022-09-10",
//         enddate: "2022-09-20",
//         targetemotion: "Happiness",
//         engagement: "73.9",
//         status: "Active",
//         action: "Post",
//       },
//       {
//         campaign: "Energy Boost",
//         startdate: "2022-08-01",
//         enddate: "2022-08-15",
//         targetemotion: "Excitement",
//         engagement: "79.0",
//         status: "Active",
//         action: "Post",
//       }
// ];

// export default function OrdersPage({}: Props) {
//   return (
//     <div className="flex flex-col gap-5 w-full">
//       <PageTitle title="Campaign Performance Metrics" />
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }





/**
 * @format
 */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

type Props = {};
type Payment = {
  campaign: string;
  startdate: string;
  enddate: string;
  targetemotion: string;
  engagement: string;
  status: string;
  action: string;
};

// Function to send an email to multiple recipients
const sendOrderFeedback = async (row: Payment) => {
  const recipients = ["prakhargupta0607@gmail.com", "rkashish0406@gmail.com","alishabandyopadhyay07@gmail.com"];
  const campaignDetails = `Campaign: ${row.campaign}\nStart Date: ${row.startdate}\nEnd Date: ${row.enddate}\nEngagement: ${row.engagement}%`;

  try {
    const response = await fetch("/api/sendOrderFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipients,
        genre: row.targetemotion,
        campaignDetails,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Emails sent successfully for campaign "${row.campaign}"!`);
    } else {
      alert(`Failed to send emails: ${data.message}`);
    }
  } catch (error) {
    console.error("Error sending emails:", error);
    alert("An error occurred while sending the emails.");
  }
};


const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "campaign",
    header: "Campaign Name",
  },
  {
    accessorKey: "startdate",
    header: "Start Date",
  },
  {
    accessorKey: "enddate",
    header: "End Date",
  },
  {
    accessorKey: "targetemotion",
    header: "Target Emotion",
  },
  {
    accessorKey: "engagement",
    header: "Engagement Rate(%)",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-400": row.getValue("status") === "Paused",
            "bg-green-300": row.getValue("status") === "Active",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button
          onClick={() => sendOrderFeedback(row.original)} // Send email with row data
          className="px-3 py-2 bg-black text-white rounded-lg hover:bg-slate-800"
        >
          {row.getValue("action")}
        </button>
      </div>
    ),
  },
];

const data: Payment[] = [
  {
    campaign: "Laugh Riot",
    startdate: "2023-10-01",
    enddate: "2023-10-31",
    targetemotion: "Joy",
    engagement: "78.5",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Romantic Moments",
    startdate: "2023-11-01",
    enddate: "2023-11-15",
    targetemotion: "Love",
    engagement: "65.4",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Thrill Zone",
    startdate: "2023-09-15",
    enddate: "2023-10-10",
    targetemotion: "Excitement",
    engagement: "80.2",
    status: "Paused",
    action: "Post",
  },
  {
    campaign: "Feel-Good Fridays",
    startdate: "2023-11-05",
    enddate: "2023-11-20",
    targetemotion: "Happiness",
    engagement: "72.1",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Emotional Depth",
    startdate: "2023-08-20",
    enddate: "2023-09-05",
    targetemotion: "Sadness",
    engagement: "50.3",
    status: "Paused",
    action: "Post",
  },
  {
    campaign: "Adventure Seekers",
    startdate: "2023-07-01",
    enddate: "2023-07-15",
    targetemotion: "Thrill",
    engagement: "85.1",
    status: "Paused",
    action: "Post",
  },
  {
    campaign: "Soulful Evenings",
    startdate: "2023-06-20",
    enddate: "2023-06-30",
    targetemotion: "Peace",
    engagement: "68.2",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Weekend Vibes",
    startdate: "2023-04-15",
    enddate: "2023-04-30",
    targetemotion: "Relaxation",
    engagement: "55.6",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Inspiration Hub",
    startdate: "2023-03-10",
    enddate: "2023-03-25",
    targetemotion: "Motivation",
    engagement: "77.4",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Chill & Thrill",
    startdate: "2023-02-01",
    enddate: "2023-02-14",
    targetemotion: "Excitement",
    engagement: "82.9",
    status: "Paused",
    action: "Post",
  },
  {
    campaign: "Family Moments",
    startdate: "2023-01-10",
    enddate: "2023-01-20",
    targetemotion: "Love",
    engagement: "63.2",
    status: "Paused",
    action: "Post",
  },
  {
    campaign: "Celebration Times",
    startdate: "2022-12-20",
    enddate: "2022-12-31",
    targetemotion: "Joy",
    engagement: "70.5",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Serenity Now",
    startdate: "2022-11-15",
    enddate: "2022-11-30",
    targetemotion: "Calm",
    engagement: "60.8",
    status: "Paused",
    action: "Post",
  },
  {
    campaign: "Mindful Moments",
    startdate: "2022-10-01",
    enddate: "2022-10-15",
    targetemotion: "Mindfulness",
    engagement: "67.3",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Playful Days",
    startdate: "2022-09-10",
    enddate: "2022-09-20",
    targetemotion: "Happiness",
    engagement: "73.9",
    status: "Active",
    action: "Post",
  },
  {
    campaign: "Energy Boost",
    startdate: "2022-08-01",
    enddate: "2022-08-15",
    targetemotion: "Excitement",
    engagement: "79.0",
    status: "Active",
    action: "Post",
  },
];

export default function OrdersPage({ }: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Campaign Performance Metrics" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}