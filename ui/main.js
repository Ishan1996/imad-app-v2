var button=document.getElementById('counter');

button.onclick = function() {
    var request= new XMLHttpRequest();
    request.onreadystatechange= function(){
        if(request.readystate=== XMLHttprequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET', 'http://http://ishan1996.imad.hasura-app.io/counter', true);
    request.send(null);
    
};
//submit
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
    var names=['Ishan','Raj','Ayush'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};
