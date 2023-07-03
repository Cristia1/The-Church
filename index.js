//aici scrii codul js pentru caplicatia ta pentru prima tabel

var global1 = 0;
var global2 = 0;
var global3 = 0;
var global4 = 0;
var global5 = 0;
var global6 = 0;
var global7 = 0;

function updateTotal() {
    var totalAll = global1 + global2 + global3 + global4 + global5 + global6 + global7;
    var totalElement = document.getElementById("total2");
    totalElement.innerHTML = totalAll;
}



function input1() {
    var bis1 = 0;
    var inputCon1 = document.getElementsByClassName("input-left1");
    var rest1 = 0;

    for (var i = 0; i < inputCon1.length; i++) {
        var inputLeft1 = inputCon1[i];
        var change1 = inputLeft1.value * 500;
        rest1 += change1;
    }

    bis1 = change1;
    var inputTotal1 = document.getElementById("Monetar-equal1");
    inputTotal1.value = bis1;
    global1 = bis1;
    updateTotal();
}



function input2() {
    var bis2 = 0;
    var inputCon2 = document.getElementsByClassName("input-left2");
    var rest2 = 0;

    for (var i = 0; i < inputCon2.length; i++) {
        var inputLeft2 = inputCon2[i];
        var change2 = inputLeft2.value * 200;
        rest2 += change2;
    }

    bis2 += change2;
    var inputTotal2 = document.getElementById("Monetar-equal2");
    inputTotal2.value = bis2;
    global2 = bis2;
    updateTotal();
}


function input3() {
    var bis3 = 0;
    var inputCon3 = document.getElementsByClassName("input-left3");
    var rest3 = 0;

    for (var i = 0; i < inputCon3.length; i++) {
        var inputLeft3 = inputCon3[i];
        var change3 = inputLeft3.value * 100;
        rest3 += change3;
    }
    bis3 += change3;
    var inputTotal3 = document.getElementById("Monetar-equal3");
    inputTotal3.value = bis3;
    global3 = bis3;
    updateTotal();
}



function input4() {
    var bis4 = 0;
    var inputCon4 = document.getElementsByClassName("input-left4");
    var rest4 = 0;

    for (i = 0; i < inputCon4.length; i++) {
        var inputLeft4 = inputCon4[i];
        var change4 = inputLeft4.value * 50;
        rest4 += change4;
    }

    bis4 += change4;
    var inputTotal4 = document.getElementById("Monetar-equal4");
    inputTotal4.value = bis4;
    global4 = bis4;
    updateTotal();
}

function input5() {
    var bis5 = 0;
    var inputCon5 = document.getElementsByClassName("input-left5");
    var rest5 = 0;

    for (i = 0; i < inputCon5.length; i++) {
        var inputLeft5 = inputCon5[i];
        var change5 = inputLeft5.value * 10;
        rest5 += change5;
    }


    bis5 += change5;
    var inputTotal5 = document.getElementById("Monetar-equal5");
    inputTotal5.value = bis5;
    global5 = bis5;
    updateTotal();
}


function input6() {
    var bis6 = 0;
    var inputCon6 = document.getElementsByClassName("input-left6");
    var rest6 = 0;

    for (i = 0; i < inputCon6.length; i++) {
        var inputLeft6 = inputCon6[i];
        var change6 = inputLeft6.value * 5;
        rest6 += change6;
    }

    bis6 += change6;
    var inputTotal6 = document.getElementById("Monetar-equal6");
    inputTotal6.value = bis6;
    global6 = bis6;
    updateTotal();
}


function input7() {
    var bis7 = 0;
    var inputCon7 = document.getElementsByClassName("input-left7");
    var rest7 = 0;

    for (i = 0; i < inputCon7.length; i++) {
        var inputLeft7 = inputCon7[i];
        var change7 = inputLeft7.value * 1;
        rest7 += change7;
    }


    bis7 += change7;
    var inputTotal7 = document.getElementById("Monetar-equal7");
    inputTotal7.value = bis7;
    global7 = bis7;
    updateTotal();
}



//asta este pentru al doilea input cu NUME


var totalBani = 0; // Variabila pentru a stoca totalul banilor

function contributie() {
    var inputNume = document.getElementById("nume");
    var inputBani = document.getElementById("bani");
    var tabelRezultate = document.getElementById("tabelContributie");
    var totalBaniElement = document.getElementById("totalBaniContributie"); // Elementul pentru afișarea totalului

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


// index.js
function generatePDF() {
    const nume = document.getElementById('nume').value;
    const bani = document.getElementById('bani').value;
    const totalInputs = document.querySelectorAll('[id^="total-input"]');
    const totalMonetar = document.getElementById('total2').textContent;
    const totalContributie = document.getElementById('tabelContributie').textContent;
    const semnatura = document.getElementById('semnatura').textContent;
    const data = document.getElementById('currentDate1').textContent;

    let tableHtml = '';

    const items = Array.from(totalInputs);

    for (let i = 0; i < items.length; i += 2) {
        const name = items[i].value;
        const amount = items[i + 1].value;

        tableHtml += `
        <tr>
          <td>${name}</td>
          <td>${amount} RON</td>
        </tr>
      `;
    }

    const htmlContent = `
      <style>
      
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
  
        .monetar {
          margin: auto;
        }
  
        .contributie {
          margin-top: 80px;
          margin-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
        }
  
        .Contributie th {
          text-align: left;
        }
  
        .contributie td {
            display: grid;
            margin-left: 1000px;
            display: block;
            margin-block-end: 10;
        }
  
        .semnatura {
          text-align: center;
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          margin: auto;
        }
      </style>
  
    <table class="monetar">
        <tr>
          <th style="font-size: 40px;" colspan="2">Monetar</th>
        </tr>
        <tr>
          <td>${bani} -></td>
          <td>${totalMonetar} RON</td>
        </tr>
        <tr>
          <td>${nume}</td>
        </tr>
    </table>
  
      <table class="contributie">
        <tr>
          <th style="font-size: 40px;" colspan="2">contributie</th>
        </tr>
        ${tableHtml}
        <tr>
          <td><strong>${totalContributie} RON</strong></td>
        </tr>
      </table>
  
      <div class="semnatura">
        <table>
          <tr>
            <td>${semnatura}</td>
            <td>${data}</td>
          </tr>
        </table>
      </div>
    `;

    const options = {
        filename: 'file.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' }
    };

    html2pdf().from(htmlContent).set(options).save();
}




