/*
        I decided to use the "key" variable as global to split the copy functionality and show the alert.
*/
let key = "";

function copyPixKey(data) {
    key = data;
    key.select();
    key.setSelectionRange(0, 9999);
    //navigator.clipboard.writeText(key.value);
    document.execCommand('copy');

    /*  I'm having problem with this command in mobile and desktop
                navigator.clipboard.writeText(key.value)
        In most of my searches the bug is related to using the command "alert( )".
        Even after using "setTimeOut( )", to isolate the "alert( )" command, the problem persisted.
        The "document.execCommand( )" command, despite being deprecated, is working perfectly on mobile and desktop
    */
        setTimeout(showPopOut, 100);
}

function showPopOut() {
    if (key.length != 0) {
        alert(`Chave Copiada: ${key.value}`);
    }
}