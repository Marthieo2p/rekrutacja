/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function validateForm() {
  let firstName = document.forms["myForm"]["firstname"].value;
  let lastName = document.forms["myForm"]["lastname"].value;
  let email = document.forms["myForm"]["email"].value;

  if (firstName == "") {
    alert("Wpisz swoje imię.");
    return false;
  }
  if (lastName == "") {
    alert("Wpisz swoje nazwisko.");
    return false;
  }
  if (email == "") {
    alert("Podaj swój adres email.");
    return false;
  }
}
