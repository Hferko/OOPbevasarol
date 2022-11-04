'use strict';

class Listak {

    constructor() {       
       
        this.$s = s => document.querySelector(s);
        this.$c = t => document.createElement(t);

        this.inputMezo();
    }


    inputMezo() {
        const CONTENT = this.$s("#bevitel");
        CONTENT.innerHTML = `<fieldset>
                            <legend>
                            Kezdjük el hát írni a listát
                            </legend>                            
                            <input type="text" name="listaelem" autofocus>
                            <button id="hozzaad">Hozzáad</button>    
                            <button id="torol">Törlés</button> 
                            <br><small>A Ctrl+Click a listaelem kijelőlése törlésre</small>
                            <div class="card" id="content"></div>`;
    }
    //-----------------------------

    createListElement() {        
        
        let $s = s => document.querySelector(s);
        let $c = t => document.createElement(t);       
       
        const UL = $c("ul");
        UL.style.listStyle= "none";
        UL.style.listStyleImage = `url("cart2.png")`;   

        $s("#content").appendChild(UL);
        var ujeElemText = $s('input[name="listaelem"]').value.trim();


        if (ujeElemText.length > 1) {

            let txt = document.createTextNode(ujeElemText);

            let li = $c("li"); 
            li.style.width = "80%";
            li.classList.add('uszik');

            li.appendChild(txt);

            li.onclick = function (event) {

                if (event.ctrlKey) {                   

                    li.classList.add('kijelolt');
                    li.classList.add('athuzva');
                }
                else {

                    li.classList.toggle('athuzva');
                }
            }

            UL.appendChild(li);

            $s('input[name="listaelem"]').value = "";
        }
    }
    // ---------------------------------

    hozzaad() {

        let hozzaad = this.$s("#hozzaad");

        hozzaad.addEventListener("click", this.createListElement);

        let sajat = this;
        document.querySelector('input[name="listaelem"]').addEventListener("keypress", function (event) {

            if (event.key == "Enter")
                sajat.createListElement();
        });
    }
    //----------------------------------

    torol() {

        let ez = this;

        let kosar = ez.$c('div');
        let tartalom = ez.$c('p');

        let kiir = ez.$s("body");

        kosar.style.color = "white";        

        this.$s("#torol").onclick = function (event) {  

            let kosaramban =  document.querySelectorAll(".kijelolt");           

            if (kosaramban.length > 0) {

                kosar.innerHTML = "Ezek az árúk már a kosaramból pislognak:";
                
                kosaramban.forEach(li => {

                    tartalom.innerHTML += '&#128722; ' + li.textContent + '; ';

                    kosar.appendChild(tartalom);
                    li.remove()
                });
                
                kiir.appendChild(kosar);
            }
            else {
                
                kosar.innerHTML = "Még nem jelöltél törlésre semmit!";
                kiir.appendChild(kosar);
            }

        }
    }

}