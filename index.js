document.getElementById("akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthday = new Date(document.getElementById("birthday").value);
  const gender = document.getElementById("gender").value;

  if (!isValidDate(birthday)) {
    alert("Please enter a valid date.");
    return;
  }

  const CC = Math.floor(birthday.getFullYear() / 100);
  const YY = birthday.getFullYear() % 100;
  const MM = birthday.getMonth() + 1; // Months are zero-based
  const DD = birthday.getDate();

  const dayOfWeek = calculateDayOfWeek(CC, YY, MM, DD);
  const akanName = getAkanName(gender, dayOfWeek);

  document.getElementById("result").innerText = `Your Akan name is ${akanName}`;
});

function calculateDayOfWeek(CC, YY, MM, DD) {
  return (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
}

function isValidDate(date) {
  return !isNaN(date.getTime()); // Check if the date is valid
}

function getAkanName(gender, dayOfWeek) {
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  return gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
}
