const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // console.log(data);
    console.table(data);
});