window.onload = function(){
document.getElementById("simple_form").onsubmit = function doTask(){

    var p = document.createElement("p")
    var span = document.createElement('span');
    span.innerHTML = '<p><strong> User </strong>: ' + document.getElementById("input").value + '</p>';
    p.appendChild(span)
    var node = document.getElementsByClassName('chat');
    node[0].appendChild(p);
    if (document.getElementById("input").value.includes("joke:")){
        p = document.createElement("p")
        span = document.createElement('span');
        span.innerHTML = '<p><strong> Site Admin </strong>: ' + 'HA-HA good one!' + '</p>';
        p.appendChild(span)
        node = document.getElementsByClassName('chat');
        node[0].appendChild(p);
    }
    return false
}}
