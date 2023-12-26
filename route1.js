const nodemailer = require("nodemailer");
const msal = require('@azure/msal-node');

// MSAL configuration
const msalConfig = {
    auth: {
        clientId: 'your-client-id',
        authority: 'https://login.microsoftonline.com/your-tenant-id',
        clientSecret: 'your-client-secret',
    },
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

async function getToken() {
    const authResult = await cca.acquireTokenByClientCredential({
        scopes: ['https://graph.microsoft.com/.default'],
    });
    return authResult.accessToken;
}

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        type: 'OAuth2',
        user: 'arshdeepdubey7635@outlook.com',
        clientId: 'your-client-id',
        clientSecret: 'your-client-secret',
        refreshToken: 'refresh-token', // You need to obtain this token through the OAuth2 flow
        accessToken: getToken(),
    },
});

const mailOptions = {
    from: 'arshdeepdubey7635@outlook.com',
    to: '1941012662.arshdeep@gmail.com',
    subject: 'The Lion Sleeps Tonight!',
    html: '<h1>Email Sent Successfully</h1>',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error' + error);
    } else {
        console.log('Email Sent: ' + info.response);
    }
});
