const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'helderpconstancio@gmail.com',
        pass: 'uydoznjkfmbdejjk'
    }
});

async function main() {
    try {
        const htmlContent = fs.readFileSync('./index.html', 'utf8');

        const info = await transporter.sendMail({
            from: '"Helder Pereira 👻" <helderpconstancio@gmail.com>',
            to: "helder@lopesbsj.com.br, helder_leg@hotmail.com, michel.sants@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: htmlContent,
        });
    
        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error ao enviar e-mail:", error)
    };
};

main().catch(console.error);