var s=[];

function sumbit(){
    var d=document.getElementById("a1").value;
    var f=document.getElementById("a2").value;
    var g=document.getElementById("a3").value;
    var h=document.getElementById("a4").value;
    s.push(d);
    s.push(f);
    s.push(g);
    s.push(h);
    console.log(s);
    document.getElementById("b").innerHTML=s;
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="inline-block";
}

function sort(){
s.sort();
console.log(s);
document.getElementById("b").innerHTML=s;
}