var count=0;
var theater;
var time;
var type;
var n;
var total_no_of_seats;
var d;
var complete=false;
var x;
function store()
    {   
        
        theater=get("th");
        
        time=get("time");
                
        
        type=get("type");
        n=get("seats");
         
        d=theater+time;
        x=d+type;
        if(type==="p")
            {
                $("#"+theater+time+"gold *").attr("disabled", "disabled").off('click');
                total_no_of_seats=40;
            }
            else
            if(type==="g")
                {
                    $("#"+theater+time+"premium *").attr("disabled", "disabled").off('click');
                    total_no_of_seats = 20;
                }
    }
    function fun(c)
        {
            
            
            var a = document.getElementById(x+c);
            if(count<n)
                {
                    for(var i=c;i<n+c&&count<n;i++)
                        {
                            if(document.getElementById(x+i).disabled)
                                break;
                            
                            count++;
                            a = document.getElementById(x+i);
                            a.value=1;
                            if(i%10==0)
                            break;
                        }
                }
                else
                   
                  clean(c);
            }
            function dis()
            {
                if(count!=n)
                    alert("Please select the required seats");
                else
                {
                    for(var i=1;i<=total_no_of_seats;i++)
                    {
                        a = document.getElementById(x+i);
                        if(a.value==1)
                        a.setAttribute("disabled", true);
                    }
                    count=0;
                    
                    /*if(type=='p')
                        $("#"+theater+time+"gold *").attr("disabled", false);
                    else
                        $("#"+theater+time+"premium *").attr("disabled", false);*/
                    
                }
            }
           function clean(c)
            {
            count=0;
                for(var i=1;i<=total_no_of_seats;i++)
                {
                    a = document.getElementById(x+i);
                    if(a.disabled)
                        continue;
                    else
                        a.value=" ";
                }
                fun(c);
            }
            
  
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

$(document).ready(function(){
    $("#"+d+"done").click(function(){
        
    });
});

$(document).ready(function(){
    $("#main_proceed").click(function(){
        theater=document.getElementById("theater").value;
        time=document.getElementById("time").value;
        var n="?th="+theater+"&time="+time;
        window.location.href="main2.html"+n;
     });
});
$(document).ready(function(){
    $("#proceed1").click(function(){
        var theater=get("th");
        var time=get("time");
        window.location.href=theater+time+".html?seats="+$("#seats").val()+"&type="+$("#type").val()+"&th="+theater+"&time="+time+"#load-stuff";
        
     });
});
$( document ).ready(function () {
    if (window.location.hash === "#load-stuff") {
        store();
    }
    
});