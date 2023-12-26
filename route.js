const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    // host : 'smtp.gmail.com',
    host : 'smtp.office365.com',
    port : 587,
    secure : false,
    // auth : {
    //     user : "1941012662.arshdeep@gmail.com",
    //     pass : "spsinb**********"
    // }
    auth : {
        user : "arshdeep*********@outlook.com",
        pass : "*************"
    }
});

const mailOptions = {
    from : "arshdeep*********@outlook.com",
    to : "1941012662.arshdeep@gmail.com",
    subject : "The Lion Sleeps Tonight!",
    html : "<h1>Email Sent Successfully</h1>"
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log("Error" + error);
    } else {
        console.log("Email Sent : " + info.response);
    }
});

//Working fine with gmail account email sending!
