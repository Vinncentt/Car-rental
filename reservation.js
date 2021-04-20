// function liste(){
//     var i = select-box.type.selectedIndex;

//     if(i==0){
//         for(j=1 ; j < 4 ; j++ );
//         select-box.fuel.option[j].text="";
//     }
//     else{
//         switch(i){
//             case 1 : var
//         }
//     }

// }

var cars = document.querySelector(
  "body > div > div > div > select:nth-child(1)"
);
var fuel = document.querySelector(
  "body > div > div > div > select:nth-child(2)"
);

var type = document.querySelector(
  "body > div > div > div > select:nth-child(3)"
);

cars.addEventListener("change", function () {
  var carIndex = cars.selectedIndex;

  switch (carIndex) {
    case 1:
      var CarArray = new Array("Electrique", "Essence");
      var gear = "null";
      break;
    case 2:
      var CarArray = new Array("Electrique", "Hybirde", "Essence", "Diesel");
      var gear = "Manuelle";
      break;
    case 3:
      var CarArray = new Array("Hybirde", "Essence", "Diesel");
      var gear = "Manuelle";
      break;
    case 4:
      var CarArray = new Array("Hybirde", "Essence", "Diesel");
      var gear = "Auto";
      break;
    case 5:
      var CarArray = new Array("Diesel");
      var gear = "Manuelle";
      break;
    case 6:
      var CarArray = new Array("Essence", "Diesel");
      var gear = "Manuelle";
      break;
    case 7:
      var CarArray = new Array("Diesel");
      var gear = "Auto";
      break;
  }
  fuel.innerHTML = "";

  for (let index = 0; index < CarArray.length; index++) {
    var opt = document.createElement("option");
    opt.innerHTML = CarArray[index];
    fuel.appendChild(opt);
  }
  document.querySelector(
    "body > div > div > div > select:nth-child(3)"
  ).firstElementChild.innerHTML = gear;
});


// -----calc------

var types = new Array(
  "moto",
  "citadine",
  "compact",
  "berline",
  "utlitaire",
  "engin",
  "camion"
);
var indexTypes = new Array("10", "12", "14", "23.8", "16", "900", "297.5");
var fuels = new Array("electrique", "hybirde", "essence", "diesel");
var indexFuel = new Array(0.05, 0.09, 0.14, 0.21);

function getresult() {
  let v = document.querySelector(
    "body > div > div > div > select:nth-child(1)"
  );

  let f = document.querySelector(
    "body > div > div > div > select:nth-child(2)"
  );

  let g = document.querySelector(
    "body > div > div > div > select:nth-child(3)"
  );

  let showresult = document.querySelector("body > div > div > input.total");

  let d = document.querySelector("body > div > div > input.days");

  
  let days = d.value;
  let autoMan = g.options[g.options.selectedIndex].innerHTML;

  let vcl = v.options[v.options.selectedIndex].innerHTML.toLowerCase();

  let vclIndex = types.indexOf(vcl);

  let fuel = f.options[f.options.selectedIndex].innerHTML.toLowerCase();

  let fuelIndex = fuels.indexOf(fuel);

  let fuelPrice = indexFuel[fuelIndex];
  let price = indexTypes[vclIndex];

  let result = 0;
  if (autoMan == "Auto") {
    console.log("auto");
    result = (parseInt(price) + parseInt(price) * (fuelPrice + 0.19)) * days;
  } else {
    result = (parseInt(price) + parseInt(price) * fuelPrice) * days;
  }

  showresult.value = result;
}
