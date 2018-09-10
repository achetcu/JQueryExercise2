
const section = $("section")

function main(){
    
    const down =$("ul");
     down.slideToggle();
     
};


$(".button").on("click", main);


function num(){
section.html("1 2 3 4 5 6 7 8 9 10");

};


$("#numbers").on("click", num);


function letter(){
            
            section.html("A B C D E F G H I J K L M N O P Q R S T V W X Y Z");
            
};
                        
            
$("#letters").on("click", letter);
    

  