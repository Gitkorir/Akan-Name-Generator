var pageOne = document.getElementById("pageOne");
var pageTwo = document.getElementById("pagetwo");
var akangenerator = document.getElementById("akangenerator");
var pageOne = document.getElementById("pageOne");
var pageTwo = document.getElementById("pagetwo");
var pageThree = document.getElementById("pageThree");
var fullPageTwo = document.getElementById("fullPageTwo");
var back = document.getElementById("back");
var exit = document.getElementById("exit");
var dates = document.getElementById("dates");
var output = document.getElementById("output");
var nameDesc = document.getElementById("nameDesc");

akangenerator.addEventListener("click", AkanEvent);
pageTwo.addEventListener("submit", formEvent);
back.addEventListener("click", backEvent);
exit.addEventListener("click", exitEvent);

function formEvent(e) {
  e.preventDefault();

  if (dates.value === "") {
    alert("Please input a birth date");
    return;
  } else if (gender() == "") {
    alert("Please input a gender");
    return;
  }
  var dayVal = day(dates.value);
  var akan = names(dayVal, gender()).toUpperCase();
  // console.log(desc(dayVal));
  output.textContent = akan;
  nameDesc.textContent = desc(dayVal);
  pageOne.style.display = "none";
  pageTwo.style.display = "none";
  pageThree.style.display = "initial";
  pageTwo.reset();
}
var gender = () => {
  return pageTwo.gender.value;
};
var day = (newDate) => {
  var day = new Date(newDate);
  day = day.getDay();
  return day;
};
var names = (day, genders) => {
  let maleNames = [
    "kwasi",
    "kwadow",
    "kwabena",
    "kwaku",
    "yaw",
    "kofi",
    "kwame",
  ];
  let femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

  if (genders === "male") {
    return maleNames[day];
  } else if (genders === "female") {
    return femaleNames[day];
  }
};
var desc = (day) => {
  var desc = new Array(
    "This name is given to a child that is born on a Sunday. They are believed to be naturally agile and therefore their appellation is “Agility”. They are quick, fast and are highly skilled in performing tasks especially crafts.",
    "This is a name for child born on Monday. They like peace and will avoid trouble at all cost. Their appellation means “Peaceful”.",
    "This means you were born on a Tuesday. You are always friendly hence the appellation of your name means “Friendliness“",
    "This means you were born on a Wednesday. The appellation of your name means “Evil”. The name is mostly associated with stubbornness.",
    "This means you were born on a Thursday. The appellation  of your name is bravery. You never care about what will result from a certain situation.",
    "This means you were born on a Friday. You would be known to be a wanderer and unable to stay in one place for long. You can travel to far places, start your own family there and never bother to check on those family members you left behind.",
    "This means you were born on a Saturday. You are believed to be “Ready for combat” your first appellation is “creation” while the other is “Grace”."
  );
  return desc[day];
};
function AkanEvent(e) {
  e.preventDefault();

  pageOne.style.display = "none";
  pageTwo.style.display = "initial";
  fullPageTwo.style.display = "initial";
}

function backEvent(e) {
  e.preventDefault();
  pageThree.style.display = "none";
  pageTwo.style.display = "initial";
  fullPageTwo.style.display = "initial";
}

function exitEvent(e) {
  e.preventDefault();
  pageThree.style.display = "none";
  pageTwo.style.display = "none";
  fullPageTwo.style.display = "none";
  pageOne.style.display = "initial";
}
