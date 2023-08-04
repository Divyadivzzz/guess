const find = Math.round(Math.random()*10); 
        string = "";
        var c = 10 ;
        
        function displayText() {
            // Get the input box element and the h2 element
            var inputBox = document.getElementById("inputBox").value;
            var displayElement = document.getElementById("displayText");
            
            


            // var inputBox = document.getElementById("inputBox").value;
            switch(c){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    if(inputBox != find){

                        displayElement.textContent ="you have "+c+" Chances";
                        // inputBox.value = "";
                        document.getElementById("inputBox").value = "";
                        c--;   
                    }
                    else{
                        
                        displayElement.innerHTML = " Wow! you won the game";
                    }
                    
                    break;
                default:
                    displayElement.textContent =" Oh no....! You lost";
                    break;
                    

           
            }
        }

                        