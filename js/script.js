
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const StreetName = document.getElementById("first-name").value
  const StreetNumber = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + StreetNumber + " " + StreetName+ "."
}
