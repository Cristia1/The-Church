//aici scrii codul js pentru caplicatia ta pentru prima tabel

var global = [0, 0, 0, 0, 0, 0, 0];

function updateTotal() {
    var totalAll = global.reduce((a, b) => a + b, 0);
    var totalElement = document.getElementById("total2");
    totalElement.innerHTML = totalAll;
}

function input(index, multiplier) {
    var bis = 0;
    var inputCon = document.getElementsByClassName("input-left" + index);
    var rest = 0;

    for (var i = 0; i < inputCon.length; i++) {
        var inputLeft = inputCon[i];
        var change = inputLeft.value * multiplier;
        rest += change;
    }

    bis = change;
    var inputTotal = document.getElementById("Monetar-equal" + index);
    inputTotal.value = bis;
    global[index - 1] = bis;
    updateTotal();
}

function input1() {
    input(1, 500);
}

function input2() {
    input(2, 200);
}

function input3() {
    input(3, 100);
}

function input4() {
    input(4, 50);
}

function input5() {
    input(5, 10);
}

function input6() {
    input(6, 5);
}

function input7() {
    input(7, 1);
}




//asta este pentru al doilea input cu NUME

var totalBani = 0;
var numeTableContributie = [];
var baniTableContributie = [];

function contributie() {
    var inputNume = document.getElementById("nume");
    var inputBani = document.getElementById("bani");
    var tabelRezultate = document.getElementById("tabelContributie");
    var totalBaniElement = document.getElementById("totalBaniContributie");

    var nume = inputNume.value;
    var bani = inputBani.value ? parseFloat(inputBani.value) : 0;

    numeTableContributie.push(nume);
    baniTableContributie.push(bani);

    var newRow = tabelRezultate.insertRow();
    var cellNume = newRow.insertCell();
    var cellBani = newRow.insertCell();
    cellNume.innerHTML = nume;
    cellBani.innerHTML = bani;

    totalBani += bani;
    totalBaniElement.innerText = totalBani;

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
    let numeCon = '';
    let baniCon = '';
    const totalInputsContributie = Array.from(document.querySelectorAll('[id^="total-input"]'));
    const totalMonetar = document.getElementById('total2').textContent;
    const semnatura = document.getElementById('semnatura').textContent;
    const data = document.getElementById('currentDate1').textContent;

    numeTableContributie.forEach(function (nume) {
        numeCon += '<li>' + nume + '</li>';
    });

    baniTableContributie.forEach(function (bani) {
        baniCon += '<li>' + bani + '</li>';
    });

    const churchTotal = document.getElementById('churchTotal').innerHTML;

    let tableHtml = '';

    for (let i = 0; i < totalInputsContributie.length; i += 2) {
        const exp = totalInputsContributie[i].textContent;
        const amount = totalInputsContributie[i + 1].textContent;

        tableHtml += `
            <tr>
              <td>${exp}</td>
              <td>${amount} RON</td>
            </tr>
        `;
    }

    const htmlContent = `
        <style>
            .misloc {
                text-align: center;
            }

            .monetar,
            .contributie {
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                column-count: 2;
                column-gap: 20px;
            }

            .contributie th {
                text-align: center;
            }

            .semnatura {
                text-align: center;
                margin-top: 100px;
            }

            .contributie td {
                column-count: 1;
                column-gap: 20px;
            }
            .church {
                text-align: left;
                
                margin-bottom: 10px;
            }
        </style>

        <table class="monetar">
            <tr>
                <th style="font-size: 40px;" colspan="2">Monetar</th>
            </tr>
            <tr>
                <td>${totalMonetar} RON</td>
            </tr>
        </table>



    <table class="contributie">
        <tr>
            <th style="font-size: 40px;" colspan="2">Contributie</th>
        </tr>
        <tr>
            <td class="vertical">
                <ul>
                    ${numeTableContributie.map((nume, index) => `<li>${nume} ${baniTableContributie[index]} RON</li>`).join('')}
                </ul>
            </td>
        </tr>
        <tr>
            <td class="church" colspan="2">${churchTotal}</td>
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


