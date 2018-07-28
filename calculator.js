var numarr = [];
// UI display code
// need to display button input into the id 'input'
input('one', '1');
input('two', '2');
input('three', '3');
input('four', '4');
input('five', '5');
input('six', '6');
input('seven', '7');
input('eight', '8');
input('nine', '9');
input('zero', '0');
input('division', '/');
input('multiplication', '*');
input('subtract', '-');
input('addition', '+');
input('decimal', '.');
input('posneg');

function input(id, num){
    document.getElementById(id).onclick = function()
  {   
            
      document.getElementById('input').innerHTML += num
    };
};  //function that displays values to the UI.

//function will clear input
document.getElementById('clear').onclick = function(){
    document.getElementById('input').innerHTML = '';
}

//when user press 'equals' the code will calculate the equation (if possible)
document.getElementById('equal').onclick = function(){
    document.getElementById('input').innerHTML = eval(document.getElementById('input').innerHTML);
}