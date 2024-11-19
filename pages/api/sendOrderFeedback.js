// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         const { recipient, genre, campaignDetails } = req.body;

//         if (!recipient || !genre || !campaignDetails) {
//             return res
//                 .status(400)
//                 .json({ success: false, message: "Invalid or missing data." });
//         }

//         try {
//             console.log("Creating Nodemailer transporter...");
//             const transporter = nodemailer.createTransport({
//                 host: "smtp.hostinger.com", // Replace with your SMTP host
//                 port: 465,
//                 secure: true,
//                 auth: {
//                     user: process.env.EMAIL_USER,
//                     pass: process.env.EMAIL_PASS,
//                 },
//             });

//             console.log(`Sending email to ${recipient} with genre ${genre}...`);
//             await transporter.sendMail({
//                 from: process.env.EMAIL_USER,
//                 to: recipient,
//                 subject: `Campaign Update: ${genre}`,
//                 text: `Hello,\n\nHere are the details of your campaign:\n\n${campaignDetails}`,
//             });

//             console.log(`Email sent to ${recipient} successfully!`);
//             res.status(200).json({ success: true, message: "Email sent successfully!" });
//         } catch (error) {
//             console.error("Email error:", error.message);
//             res.status(500).json({ success: false, message: "Failed to send email." });
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed." });
//     }
// }











// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         const { recipients, genre, campaignDetails } = req.body;

//         if (!recipients || !Array.isArray(recipients) || recipients.length === 0 || !genre || !campaignDetails) {
//             return res
//                 .status(400)
//                 .json({ success: false, message: "Invalid or missing data." });
//         }

//         try {
//             console.log("Creating Nodemailer transporter...");
//             const transporter = nodemailer.createTransport({
//                 host: "smtp.hostinger.com", // Replace with your SMTP host
//                 port: 465,
//                 secure: true,
//                 auth: {
//                     user: process.env.EMAIL_USER,
//                     pass: process.env.EMAIL_PASS,
//                 },
//             });

//             for (const recipient of recipients) {
//                 console.log(`Sending email to ${recipient} with genre ${genre}...`);
//                 await transporter.sendMail({
//                     from: process.env.EMAIL_USER,
//                     to: recipient,
//                     subject: `Campaign Update: ${genre}`,
//                     text: `Hello,\n\nHere are the details of your campaign:\n\n${campaignDetails}`,
//                 });

//                 console.log(`Email sent to ${recipient} successfully!`);
//             }

//             res.status(200).json({ success: true, message: "Emails sent successfully!" });
//         } catch (error) {
//             console.error("Email error:", error.message);
//             res.status(500).json({ success: false, message: "Failed to send emails." });
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed." });
//     }
// }


// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         const { recipient, genre, campaignDetails } = req.body;

//         if (!recipient || !genre || !campaignDetails) {
//             return res
//                 .status(400)
//                 .json({ success: false, message: "Invalid or missing data." });
//         }

//         try {
//             console.log("Creating Nodemailer transporter...");
//             const transporter = nodemailer.createTransport({
//                 host: "smtp.hostinger.com", // Replace with your SMTP host
//                 port: 465,
//                 secure: true,
//                 auth: {
//                     user: process.env.EMAIL_USER,
//                     pass: process.env.EMAIL_PASS,
//                 },
//             });

//             console.log(Sending email to ${recipient} with genre ${genre}...);
//             await transporter.sendMail({
//                 from: process.env.EMAIL_USER,
//                 to: recipient,
//                 subject: Campaign Update: ${genre},
//                 text: Hello,\n\nHere are the details of your campaign:\n\n${campaignDetails},
//             });

//             console.log(Email sent to ${recipient} successfully!);
//             res.status(200).json({ success: true, message: "Email sent successfully!" });
//         } catch (error) {
//             console.error("Email error:", error.message);
//             res.status(500).json({ success: false, message: "Failed to send email." });
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed." });
//     }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { recipients, genre, campaignDetails } = req.body;

        // Validate input
        if (!recipients || !Array.isArray(recipients) || recipients.length === 0 || !genre || !campaignDetails) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid or missing data." });
        }

        try {
            console.log("Creating Nodemailer transporter...");
            const transporter = nodemailer.createTransport({
                host: "smtp.hostinger.com", // Replace with your SMTP host
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER, // Ensure this environment variable is set
                    pass: process.env.EMAIL_PASS, // Ensure this environment variable is set
                },
            });

            console.log(`Sending email to ${recipients.join(", ")} with genre ${genre}...`);

            // Send email to all recipients
            await Promise.all(
                recipients.map((recipient) =>
                    transporter.sendMail({
                        from: process.env.EMAIL_USER,
                        to: recipient,
                        subject: `Campaign Update: ${genre}`,
                        text: `Hello,\n\nHere are the details of your campaign:\n\n${campaignDetails}`,
                    })
                )
            );

            console.log(`Email sent successfully to: ${recipients.join(", ")}`);
            res.status(200).json({ success: true, message: "Emails sent successfully!" });
        } catch (error) {
            console.error("Email error:", error.message);
            res.status(500).json({ success: false, message: "Failed to send emails." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}
