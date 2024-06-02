function showSideBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyl1cZ3xQFBpWVHr-g6WZ3vh6QT9oJSyqNUWW_8XIrCTdPJP5dIuJ07q_bFZrfHFE7J/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Submit Successfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 2000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    });
});


