//aici scrii codul js pentru caplicatia ta pentru prima tabel

var totalMonetar = 0;
var totalBani = 0;
var totalPungi = 0;
var totalPensula = 0;
var totalButon = 0;
var totalBisa = 0;
var totalBere = 0;

function updateTotal() {
    var total = totalMonetar + totalBani + totalPungi + totalPensula + totalButon + totalBisa + totalBere;
    var totalElement = document.getElementById("total2");
    totalElement.innerHTML = total;
}

function adaugaLaTotal1() {
    var inputLeft = document.getElementsByClassName("input-left1")[0];
    var valoare = parseInt(inputLeft.value);
    var valoareAdaugata = valoare * 500;

    totalMonetar += valoareAdaugata;
    var inputTotal = document.getElementById("total-input1");
    inputTotal.value = totalMonetar;
    updateTotal();
}

function actualizeazaTotal2() {
    var inputStanga1 = document.getElementById("input-left2");
    var valoare = parseInt(inputStanga1.value);
    var valoareAdaugata = valoare * 200;

    totalBani += valoareAdaugata;
    var inputTotal = document.getElementById("total-input-2");
    inputTotal.value = totalBani;
    updateTotal();
}

function adaugaLaTotal3() {
    var inputLeft2 = document.getElementsByClassName("input-left3")[0];
    var valoare = parseInt(inputLeft2.value);
    var valoareAdaugata = valoare * 100;

    totalPungi += valoareAdaugata;
    var inputTotal = document.getElementById("total-input-3");
    inputTotal.value = totalPungi;
    updateTotal();
}

function adaugaLaTotal4() {
    var inputLeft3 = document.getElementsByClassName("input-left4")[0];
    var valoare = parseInt(inputLeft3.value);
    var valoareAdaugata = valoare * 50;

    totalPensula += valoareAdaugata;
    var inputTotal = document.getElementById("total-input-4");
    inputTotal.value = totalPensula;
    updateTotal();
}

function adaugaLaTotal5() {
    var inputLeft4 = document.getElementsByClassName("input-left5")[0];
    var valoare = parseInt(inputLeft4.value);
    var valoareAdaugata = valoare * 10;

    totalButon += valoareAdaugata;
    var inputTotal = document.getElementById("total-input-5");
    inputTotal.value = totalButon;
    updateTotal();
}

function adaugaLaTotal6() {
    var inputLeft5 = document.getElementsByClassName("input-left6")[0];
    var valoare = parseInt(inputLeft5.value);
    var valoareAdaugata = valoare * 5;

    totalBisa += valoareAdaugata;
    var inputTotal = document.getElementById("total-input-6");
    inputTotal.value = totalBisa;
    updateTotal();
}
function adaugaLaTotal7() {
    var inputLeft6 = document.getElementsByClassName("input-left7")[0];
    var valoare = parseInt(inputLeft6.value);
    var valoareAdaugata = valoare * 1;

    totalBere += valoareAdaugata;
    var inputTotal = document.getElementById("total-input-7");
    inputTotal.value = totalBere;
    updateTotal();
}






//asta este pentru al doilea input cu nume


var totalBani = 0; // Variabila pentru a stoca totalul banilor

function afiseazaTotalBiserica() {
    var inputNume = document.getElementById("nume");
    var inputBani = document.getElementById("bani");
    var tabelRezultate = document.getElementById("tabelRezultate");
    var totalBaniElement = document.getElementById("totalBani"); // Elementul pentru afișarea totalului

    var nume = inputNume.value;
    var bani = inputBani.value ? parseFloat(inputBani.value) : 0;

    var newRow = tabelRezultate.insertRow();
    var cellNume = newRow.insertCell();
    var cellBani = newRow.insertCell();
    cellNume.innerHTML = nume;
    cellBani.innerHTML = bani;

    totalBani += bani; // Actualizare total bani
    totalBaniElement.innerText = totalBani; // Afișare total bani

    inputNume.value = "";
    inputBani.value = "";
}


//asta este pentru al 3-lea tabla cu data 



function getMonthName(monthIndex) {
    var monthNames = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
    ];
    return monthNames[monthIndex];
}

window.onload = function () {
    var currentDateElement1 = document.getElementById("currentDate1");
    var currentDateElement2 = document.getElementById("currentDate2");

    var currentDate = new Date();
    var formattedDate = currentDate.getDate() + " " + getMonthName(currentDate.getMonth()) + " " + currentDate.getFullYear();

    currentDateElement1.innerText = formattedDate;

};



// aici este butonul care descarcaa
// aici este pdf 

// function downloadPDF() {
//     var nume = document.getElementById('nume').value;
//     var bani = document.getElementById('bani').value;
//     var input1 = document.getElementById('total-input1').value;
//     var input2 = document.getElementById('total-input2').value;
//     var input3 = document.getElementById('total-input3').value;
//     var input4 = document.getElementById('total-input4').value;
//     var input5 = document.getElementById('total-input5').value;
//     var input6 = document.getElementById('total-input6').value;
//     var input7 = document.getElementById('total-input7').value;
//     var TotalMonetar = document.getElementById('total2').textContent;
//     var TotalContributie = document.getElementById('totalBani').textContent;
//     // console.log(nume);
//     var pdf = new jsPDF();

//     console.log(bani);
//     pdf.text(20, 20, "Nume: " + numeValue);
//     pdf.text(20, 30, "Bani (RON): " + baniValue);
//     pdf.text(20, 40, "Input1: " + input1Value);
//     pdf.text(20, 50, "Input2: " + input2Value);
//     pdf.text(20, 60, "Input3: " + input3Value);
//     pdf.text(20, 70, "Input4: " + input4Value);
//     pdf.text(20, 80, "Input5: " + input5Value);
//     pdf.text(20, 90, "Input6: " + input6Value);
//     pdf.text(20, 100, "Input7: " + input7Value);
//     pdf.text(20, 110, "Total monetar: " + TotalMonetar);
//     pdf.text(20, 120, "Total contribuție: " + TotalContributie);

//     // Adăugați aici alte informații în fișierul PDF
//     var numeValue = document.getElementById('nume').value;
//     var baniValue = document.getElementById('bani').value;

//     var input1Value = document.getElementById('total-input1').value;
//     var input2Value = document.getElementById('total-input2').value;
//     var input3Value = document.getElementById('total-input3').value;
//     var input4Value = document.getElementById('total-input4').value;
//     var input5Value = document.getElementById('total-input5').value;
//     var input6Value = document.getElementById('total-input6').value;
//     var input7Value = document.getElementById('total-input7').value;

//     var TotalMonetar = document.getElementById('total2').textContent;
//     var TotalContributie = document.getElementById('totalBani').textContent;

//     // var tabelRezultate = document.getElementById('tabelRezultate');
//     // var tabelRows = tabelRezultate.getElementsByTagName('tr');
//     var tabelData = [];
//     // console.log(tabelRows);
//     // Colectați informațiile din tabelul de rezultate
//     for (var i = 1; i < tabelRows.length; i++) {
//         var cells = tabelRows[i].getElementsByTagName('td');
//         var rowData = {
//             nume: cells[0].innerText,
//             bani: cells[1].innerText
//         };
//         tabelData.push(rowData);
//     }


//     pdf.save("PDF.pdf");
// }


const url = "/PDF.pdf";

(async function () {
  // Specify the workerSrc property
  pdfjsLib.GlobalWorkerOptions.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";

  // Create the PDF document
  const doc = await pdfjsLib.getDocument(url).promise;

  // Get the input values from the form
  const nume = document.getElementById('nume').value;
  const bani = document.getElementById('bani').value;
  const input1 = document.getElementById('total-input1').value;
  const input2 = document.getElementById('total-input-2').value;
  const input3 = document.getElementById('total-input-3').value;
  const input4 = document.getElementById('total-input-4').value;
  const input5 = document.getElementById('total-input-5').value;
  const input6 = document.getElementById('total-input-6').value;
  const input7 = document.getElementById('total-input-7').value;
  const totalMonetar = document.getElementById('total2').textContent;
  const totalContributie = document.getElementById('totalBani').textContent;

  // Generate the document content
  const documentContent = `
    Nume: ${nume}
    Bani: ${bani}
    Input1: ${input1}
    Input2: ${input2}
    Input3: ${input3}
    Input4: ${input4}
    Input5: ${input5}
    Input6: ${input6}
    Input7: ${input7}
    Total Monetar: ${totalMonetar}
    Total Contributie: ${totalContributie}
  `;

  // Get the page content
  const pageContent = await getPageContent(doc, 1);

  // Merge the page content with the document content
  const mergedContent = `${pageContent}\n\n${documentContent}`;

  // Display the merged content in a textarea
  const textarea = document.createElement('textarea');
  textarea.value = mergedContent;
  document.body.appendChild(textarea);
})();

async function getPageContent(doc, pageNumber) {
  if (pageNumber >= 1 && pageNumber <= doc._pdfInfo.numPages) {
    // Fetch the page
    const page = await doc.getPage(pageNumber);

    // Get the text content of the page
    const content = await page.getTextContent();

    // Extract the text from the content
    return content.items.map(item => item.str).join(' ');
  } else {
    console.log("Please specify a valid page number");
    return "";
  }
}

function downloadPDF() {
  // Get the merged content from the textarea
  const textarea = document.querySelector('textarea');
  const mergedContent = textarea.value;

  // Create a new Blob with the merged content
  const blob = new Blob([mergedContent], { type: 'application/pdf' });

  // Create a download link and trigger the download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'document.pdf';
  link.click();
}
