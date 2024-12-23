const XLSX = require("xlsx");
const fs = require("fs");
const nodemailer = require("nodemailer");

// Carregar o arquivo Excel
const workbook = XLSX.readFile("emails.xlsx");

// Selecionar a primeira planilha
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Converter os dados para JSON
const emailList = XLSX.utils.sheet_to_json(sheet);

// Exibir os dados
console.log(emailList);



// Configuração do transporte
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "helderpconstancio@gmail.com",
    pass: "Cons891712@#",
  },
});

// Função para enviar e-mails
async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: "seuemail@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email enviado para ${to}: ${info.response}`);
  } catch (error) {
    console.error(`Erro ao enviar para ${to}:`, error);
  }
}
