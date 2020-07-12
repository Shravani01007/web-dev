var a=["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg","images/image6.jpg","images/image7.jpg","images/image8.jpg","images/image9.jpg","images/image10.jpg"]
    var i=0;
    
    function slideshow(){
       
        
        document.getElementById("img").setAttribute("src",a[i]);
        if(i<10){
            i++;
        }
        else{
          document.getElementById("img").style.display="none";
        }        
    }
    function show(){
        
        var x= document.getElementById("time").value;
        x=x*1000;
       
       setInterval(slideshow,x);
       
    }


function add(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)+Number(num2);
    document.getElementById("ans").innerHTML=sum;
}

function mul(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)*Number(num2);

    document.getElementById("ans").innerHTML=sum;
}

function sub(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)-Number(num2);
    document.getElementById("ans").innerHTML=sum;
    
}

function div(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)/Number(num2);
    document.getElementById("ans").innerHTML=sum;
}

 
$("#email").keyup(function(){
        const re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /*/\S+@\S+\.\S+/;*/
        var em = document.getElementById("email")
        if(re.test(em.value)){
            em.style.backgroundColor = "#baffbd";
        }
        else{
            em.style.backgroundColor = "#ffbaba";
        }
    });

        
