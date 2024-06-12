function es() {
language = 'es';
runlang();
}
function en() {
language = 'en';
runlang();
}
function runlang(){
if (language === 'en') {
  document.querySelectorAll('.es').forEach(elem => elem.style.display = 'none');
  document.querySelectorAll('.en').forEach(elem => elem.style.display = 'inline');
} else {
  document.querySelectorAll('.en').forEach(elem => elem.style.display = 'none');
  document.querySelectorAll('.es').forEach(elem => elem.style.display = 'inline');
}}
language = 'es';
runlang();
