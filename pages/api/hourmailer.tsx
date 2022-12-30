// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
const INBOX =
  "seouloffice-inbox-aaaagoypv3whl3xa4hmyiotqci@mckinleyrice.slack.com";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const newRecord = {
      id: new Date().getTime().toString(),
      studentName: req.body.student_name,
      studentEmail: req.body.student_email,
      studentPhone: req.body.student_mobile,
      studentMessage: req.body.student_message,
      form_fill_date: new Date(),
    };
    console.log(new Date(newRecord.id), "check response");

    const messageTemplate = `
    <body>
    <h4>Form Fill Date : ${new Date(newRecord.form_fill_date)}</h4>
      <h4>Student Name</h4>
      <p>${newRecord.studentName}</p>
      <h4>Student Email ID</h4>
      <p>${newRecord.studentEmail}</p>
      <h4>Student Mobile Number</h4>
      <p>${newRecord.studentPhone}</p>
      <h4>Student Comment</h4>
      <p>${newRecord.studentMessage}</p>
    
    </body>`;

    const emailPayload = {
      // toAddress: INBOX,
      toAddress: "designcoacher@gmail.com",
      title: `Design Training Consultant Request`,
      message: messageTemplate,
    };

    const options = {
      method: "POST",
      url: "https://hourmailer.p.rapidapi.com/send",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "hourmailer.p.rapidapi.com",
        "X-RapidAPI-Key": "2e4fd8ad5fmsh291a36f42b824ecp117a64jsn20458266c732",
      },
      data: emailPayload,
    };

    try {
      await axios.request(options);
      res.status(201).json({ message: "Message successfully sent." });
    } catch (error: any) {
      res.status(400).json(error.toString());
    }
  } else {
    res.status(405);
  }
}
