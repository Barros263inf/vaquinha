
function getPixKey(key) {
    let data = key.value;
    navigator.clipboard.writeText(data.trim());
    alert(`chave copiada: ${data}`)
}