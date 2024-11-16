// // import nodemailer from "nodemailer";

// // export default async function handler(req, res) {
// //     if (req.method === "POST") {
// //         const { genre, movies } = req.body;

// //         console.log("Received data:", { genre, movies });

// //         if (!genre || !Array.isArray(movies)) {
// //             return res.status(400).json({ success: false, message: "Invalid data." });
// //         }

// //         try {
// //             console.log("Creating Nodemailer transporter...");
// //             const transporter = nodemailer.createTransport({
// //                 host: "smtp.hostinger.com",
// //                 port: 465,
// //                 secure: true,
// //                 auth: {
// //                     user: process.env.EMAIL_USER,
// //                     pass: process.env.EMAIL_PASS,
// //                 },
// //             });

// //             console.log("Sending email...");
// //             await transporter.sendMail({
// //                 from: process.env.EMAIL_USER,
// //                 to: "prakhargupta0607@gmail.com",
// //                 subject: "Feedback",
// //                 text: `Genre: ${genre}\nMovies: ${movies.join(", ")}`,
// //             });

// //             console.log("Email sent successfully!");
// //             res.status(200).json({ success: true, message: "Email sent successfully!" });
// //         } catch (error) {
// //             console.error("Email error details:", error.message, error.stack);
// //             res.status(500).json({ success: false, message: error.message });
// //         }
// //     } else {
// //         console.log("Invalid request method:", req.method);
// //         res.status(405).json({ message: "Method not allowed." });
// //     }
// // }




// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         const { genre, movies, recipients } = req.body;

//         console.log("Received data:", { genre, movies, recipients });

//         // Validate data
//         if (!genre || !Array.isArray(movies) || !Array.isArray(recipients)) {
//             return res.status(400).json({ success: false, message: "Invalid data." });
//         }

//         try {
//             console.log("Creating Nodemailer transporter...");
//             const transporter = nodemailer.createTransport({
//                 host: "smtp.hostinger.com", // Update with your SMTP host
//                 port: 465,
//                 secure: true,
//                 auth: {
//                     user: process.env.EMAIL_USER,
//                     pass: process.env.EMAIL_PASS,
//                 },
//             });

//             // Loop through recipients and send emails
//             for (const recipient of recipients) {
//                 console.log(`Sending email to ${recipient}...`);
//                 await transporter.sendMail({
//                     from: process.env.EMAIL_USER,
//                     to: recipient,
//                     subject: `Feedback: ${genre}`,
//                     text: `Your favorite genre is: ${genre}\nRecommended Movies:\n${movies.join(", ")}`,
//                 });

//                 console.log(`Email sent to ${recipient} successfully!`);
//                 // Introduce a delay (e.g., 2 seconds) before sending the next email
//                 await new Promise((resolve) => setTimeout(resolve, 2000));
//             }

//             res.status(200).json({ success: true, message: "Emails sent successfully!" });
//         } catch (error) {
//             console.error("Email error details:", error.message, error.stack);
//             res.status(500).json({ success: false, message: "Failed to send emails." });
//         }
//     } else {
//         console.log("Invalid request method:", req.method);
//         res.status(405).json({ message: "Method not allowed." });
//     }
// }


import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { emailData } = req.body; // Expecting an array of email data

        console.log("Received data:", emailData);

        // Validate the data
        if (!Array.isArray(emailData) || emailData.length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid or empty email data." });
        }

        try {
            console.log("Creating Nodemailer transporter...");
            const transporter = nodemailer.createTransport({
                host: "smtp.hostinger.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            for (const { recipient, genre, movies } of emailData) {
                console.log(`Sending email to ${recipient} with genre ${genre}...`);

                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: recipient,
                    subject: `Feedback: ${genre}`,
                    text: `Your favorite genre is: ${genre}\nRecommended Movies:\n${movies.join(
                        ", "
                    )}`,
                });

                console.log(`Email sent to ${recipient} successfully!`);
                // Add a delay of 2 seconds between sending emails
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }

            res.status(200).json({ success: true, message: "Emails sent successfully!" });
        } catch (error) {
            console.error("Email error:", error.message);
            res.status(500).json({ success: false, message: "Failed to send emails." });
        }
    } else {
        console.log("Invalid request method:", req.method);
        res.status(405).json({ message: "Method not allowed." });
    }
}
