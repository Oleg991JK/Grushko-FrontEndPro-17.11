window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".sign");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const info = Object.fromEntries(new FormData(e.target).entries());
        console.log(info);

        let header = "";
        let tape = "";

        for (key in info){
            header += `<th>${key}</th>`;
            tape += `<th>${info[key]}</th>`
        }

        document.querySelector(".table-head").innerHTML = header;
        document.querySelector(".table-body").innerHTML = tape;
    })



})

