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
  document.title = 'Artificial Intelligence for Executives: Course Syllabus';
} else {
  document.querySelectorAll('.en').forEach(elem => elem.style.display = 'none');
  document.querySelectorAll('.es').forEach(elem => elem.style.display = 'inline');
  document.title = 'Inteligencia Artificial para Ejecutivos: Temario del Curso';
}}
language = 'en';
runlang();
