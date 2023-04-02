
function getPixKey(key) {
    const data = key;
    data.select();
    data.setSelectionRange(0, 9999);
    alert(`Chave Copiada: ${data.value}`);
    document.execCommand("copy");
    navigator.clipboard.writeText(data.value);
}