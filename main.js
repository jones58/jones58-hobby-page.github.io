// getting current date and time //

const currentDateTime = new Date().toLocaleString("en-GB", {
  timeZone: "Europe/London",
});

// date and time showing on page //

const dateOnPage = document.getElementById("date");
dateOnPage.textContent = currentDateTime;
