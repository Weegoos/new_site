
// window.location.reload()

let print_btn = document.querySelector('#print_btn')

print_btn.onclick = function (){
    var element = document.getElementById('content')
html2pdf().from(element).save()
// element.setAttribute('style','display:flex')
var opt =
{
    margin:1,
    filename: 'pageContent.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 2},
    jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
}
html2pdf.set(opt).from(element).saveAs('ins.pdf')
html2pdf.set(opt).from(element).save()
}