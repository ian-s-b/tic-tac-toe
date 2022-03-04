var reset_btn=document.querySelector("#reset_btn");

var cells_id = document.querySelectorAll("td");

var choice=["X","O",""];

function idx_selector(i){
        if (i===0) {return 1}
        else if (i===1) {return 2}
        else if (i===2) {return 0}
}

function symbol_input(i){i[0].addEventListener("click",
                function(){
                           i[0].textContent=choice[i[1]];
                           i[1]=idx_selector(i[1])})
                           }

for (i of cells_id){symbol_input([i,0])}

reset_btn.addEventListener("click", function(){location.reload()})

