
function getPixKey(key) {

    const data = key;
    data.select();
    data.setSelectionRange(0, 9999);
    document.execCommand("copy");

    navigator.clipboard.writeText(data.value);
    alert(`chave copiada: ${data.value}`);
}