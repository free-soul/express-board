const currentComponent = "/create";
const URL = window.location.href.replace(currentComponent, "") + "/c";

console.log(URL);

function create()
{
    var username = document.getElementById("submit-username");
    var title = document.getElementById("submit-title");
    var content = document.getElementById("long-content");

    if (username.value.length > 0 > 0 && title.value.length > 0 && content.value.length > 0)
    {
        fetch("/c", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: {
                    username: username.value,
                    title: title.value,
                    content: content.value
                }
            })
        })
        window.location.href = window.location.href.replace("/create", "");
    }
}