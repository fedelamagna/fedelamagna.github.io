// Should only be triggered on first page load
console.log('init');

window.addEventListener("DOMContentLoaded", function() {
  document.getElementById('survey-form').addEventListener("submit", function(e) {
    e.preventDefault(); // before the code
      /* do what you want with the form */
      let cultivo = document.getElementById("dropdown").value;
      let lotes = document.getElementById("lotes");
      let rinde_esp = document.getElementById("rinde_esp");
      let rinde_ind = document.getElementById("rinde_ind");
      console.log(`cultivo ${cultivo}`);
      console.log(`lotes ${lotes.value}`);
      console.log(`rinde esperado ${rinde_esp.value}`);
      console.log(`rinde indiferencia ${rinde_ind.value}`);
       if (cultivo == 'trigo'){
	  price_grain=264;
      } else if (cultivo == 'maiz'){
	  price_grain=178;
      } else if (cultivo == 'soja'){
	  price_grain=320;
      } else {
	  price_grain=-1;
      };
      if (price_grain>0){
	  console.log(`el cultivo es conocido, de precio ${price_grain}`);
      } else {
	  console.log('el cultivo es otro');
      };
      // Will be triggered on form submit
      erv=math.erf(0.2);
      console.log(`${erv}`);
    console.log('submit');
  })
});
