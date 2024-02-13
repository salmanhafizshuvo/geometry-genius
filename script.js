
function CalculateTringle(){
    const base = document.getElementById("inputbase");
    const baseText = base.value
    const ibase = parseFloat(baseText)


    const hight = document.getElementById("inputhight");
    const hightText = hight.value 
    const ihight = parseFloat(hightText)

    const tringleArea = 0.5 * ibase * ihight ; 

    const TAS = document.getElementById('TA');
    TAS.innerText = tringleArea + ' ' ; 

}

function CalculateRectangle(){
    const RW = document.getElementById('inputRW')
    const RWtext = RW.value;
    const iRW = parseFloat(RWtext) ;
    
    const RI = document.getElementById('inputhRI')
    const RIText = RI.value ;
    const iRH = parseFloat(RIText)

    const rectangle = iRW * iRH;

    const RectArea = document.getElementById('RA')
    RectArea.innerText = rectangle + ' '; 
}