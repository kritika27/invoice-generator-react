import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = list => {
    console.log(list);
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = [ "Title", "Issue", ];
//   // define an empty array of rows
  const tableRows = [];

//   // for each ticket pass all its data into an array
  list.forEach(ticket => {
    const ticketData = [
        ticket.invNumber,
        ticket.from,
        
    //   ticket.id,
    //   ticket.invNumber,
    //   ticket.request,
    //   ticket.status,
      // called date-fns to format the date on the ticket
    //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
   
//     // push each tickcet's info into a row
    tableRows.push(ticketData);
  });


//   // startY is basically margin-top
//   doc.autoTable(tableColumn, tableRows, { startY: 20 });
//   import autoTable from 'jspdf-autotable' // using npm
// some code, declare your jspdf doc, then...
autoTable(doc,{
                head: [tableColumn], // don't forget square brackets, columns is an array of string
                body: tableRows,
 }); 


//  var img = new Image();
// img.src = require("./images/picture (2).jpeg");

// // var doc1 = new jsPDF('p', 'mm', 'a3');  // optional parameters
// doc.addImage(img, 'JPEG', 10, 29);
// //  var imgData='data:image/jpeg;base64,'+ Base64.encode("https://invoice-generator.com/static/favicon-96x96.f97ce9a5.png");
//  doc.addImage(imgData,'JPEG',15,14,180,160);// array of arrays of string
//   const date = Date().split(" ");
//   // we use a date string to generate our filename.
//   const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
//   // ticket title. and margin-top + margin-left
//   doc.text("Closed tickets within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.text("Closed tickets within the last one month.", 14, 15);
  doc.text("end", 54, 35);
  doc.save(`report_sample.pdf`);
};

export default generatePDF;