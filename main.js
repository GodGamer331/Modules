var doc = document.querySelectorAll(".web .ver")
var page = document.title.split(" - ")[1].toLowerCase().split(" ").join("-")

let url = "https://theadmin.sparkedservers.us/api/modules/"
let addon = `${page}/version`

var req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if (req.readyState == 4){
        var Ver = JSON.parse(req.response)
        doc.forEach(version => {
            version.textContent = Ver.version
        })
    }
}

req.open("GET", url+addon)
req.setRequestHeader("Content-Type", "application/json")
req.send()