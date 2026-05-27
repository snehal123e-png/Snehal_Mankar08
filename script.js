const t =
'AI & Data Science Student';

let i = 0;

function type(){

if(i < t.length){

document
.getElementById('typing')
.innerHTML += t.charAt(i);

i++;

setTimeout(type,100);

}
}

type();
