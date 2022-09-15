let arrSymptoms = [
    ['Coloboma (eye defect)', 61],
    ['Anal and rectum defects', 81],
    ['Preauricular tags or pits (Outer ear defect)', 87],
    ['Heart Defects', 3],
    ['Kidney and Genital Defects', 71],
    ['Intellectual Disability', 56],
    ['Skeletal Defects', 73],
    ['Abdominal Defects - Hirschsprung disease', 12.5],
    ['Abdominal Defects - Biliary atresia', 8],
    ['Cleft Palate', 14],
    ['Short stature',50 ],
    ['Downslanting palpebral fissures', 7],
    ['Hypertelorism', 38],
    ['Microphthalmia', 39],
    ['Epicanthal folds', 64],
    ['Hearing loss', 16],
]


function displayCESsymptoms(name) {
    let symptomBox = document.getElementById("symptoms");
    var textTag = document.createElement('p');
    textTag.textContent = name;
    symptomBox.appendChild(textTag);
}
function generateSymptoms() {
    for(var symp of arrSymptoms) {
        if(Math.floor(Math.random() * 100) + 1 <= symp[1]) {
//             alert(symp[1]);
            displayCESsymptoms(symp[0]);
        }
    }
}
