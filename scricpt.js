/* const pix_bank = pix_key_bank.innerText;
const pix_phone = pix_key_phone.innerText; */

function getPixKey(key){
    
    let data = key;
    data.select();
    data.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert(data.value)
}

/* console.log(pix_bank);
console.log(pix_phone); */