const Http = new XMLHttpRequest();
const url='https://theadmin.sparkedservers.us/modules';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        return this.responseText
    }
}
