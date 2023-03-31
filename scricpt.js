
function getPixKey(key) {
    const data = key.value;
    data.select();
    data.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(data.trim());
    alert(`chave copiada: ${data}`)
}