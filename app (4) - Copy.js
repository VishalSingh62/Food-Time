// showing navbar when click menu on mobile view
// const mobile = document.querySelector('.menu-toggle');
// const mobileLink = document.querySelector('.sidebar');

// mobile.addEventListener("cilck",function(){
//     mobile.classList.toggle("is-active");
//     mobileLink.classList.toggle("active");
// });
document.addEventListener("DOMContentLoaded", function() {
    const mobile = document.querySelector('.menu-toggle');
    const mobileLink = document.querySelector('.sidebar');

    mobile.addEventListener("click", function() {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
    );
});


// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Assuming 'mobile' is the element you want to remove the 'is-active' class from
    const mobile = document.querySelector("#mobile"); // Change to the correct selector or ID

    // Assuming 'mobileLink' is the element you're adding the click event to
    const mobileLink = document.querySelector("#mobileLink"); // Change to the correct selector or ID

    mobileLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the link

        const menuBars = mobile.classList.contains("is-active");

        if (window.innerWidth <= 768 && menuBars) {
            mobile.classList.remove("is-active");
            mobileLink.classList.remove("active");
        }
    });
});
