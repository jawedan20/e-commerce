export const intToRupiah = (interger) => {
    let reverse = interger.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
    return `Rp ${ribuan.join('.').split('').reverse().join('')}`
}

export const formatDate = (date) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString("en-US", options)
}