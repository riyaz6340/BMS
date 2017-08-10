            var count=0;
            var n;
            var clas;
            var booking_complete=false;
            var total_seats;
            var theatre = [];
            function disabled()
            {
                if(clas=='p')
                {
                    $("#gold *").attr("disabled", "disabled").off('click');
                    total_seats=50;
                }   
                else
                {
                    $("#premium *").attr("disabled", "disabled").off('click');
                    total_seats=20;
                }
                theatre = JSON.parse(localStorage.getItem(localStorage.getItem("theater")+"_"+localStorage.getItem("time")+"_"+clas));
                first_execute();               
            }
            function fun(c)
            {
                var a = document.getElementById(clas+c);
                if(count<n)
                {
                    for(var i=c;i<n+c&&count<n;i++)
                        {
                            if(document.getElementById(clas+i).disabled)
                                break;
                            count++;
                            a = document.getElementById(clas+i);
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
                    alert("Please select the required seats :- "+n);
                else
                {
                    booking_complete=true;
                    for(var i=1;i<=total_seats;i++)
                    {
                        
                        a = document.getElementById(clas+i);
                        if(a.value==1)
                            {
                                a.setAttribute("disabled", true);
                                theatre[i]=1;
                            }
                    }
                    count=0;
                    if(clas=='p')
                        //$("#gold *").attr("disabled", false);
                            
                            $("#gold").find("input").attr("disabled", false);
                    else
                        //$("#premium *").attr("disabled", false);
                             $("#premium").find("input").attr("disabled", false);
                    localStorage.setItem(localStorage.getItem("theater")+"_"+localStorage.getItem("time")+"_"+clas, JSON.stringify(theatre));
                }
            }
            function clean(c)
            {
                count=0;
                for(var i=1;i<=total_seats;i++)
                {
                    a = document.getElementById(clas+i);
                    if(theatre[i]==1)
                    {
                        a.value=1;
                        a.setAttribute("disabled", true);           
                    }
                    else
                        a.value=" ";
                }
                fun(c);
            }
            
            
$(document).ready(function(){
    $("#hide").click(function(){
        $("#first").hide();
        $("#second").show();
    });
});
function store()
{
    n=parseInt(document.getElementById("seats").value);    
    clas=document.getElementById("type").value;
    disabled();
}

$(document).ready(function(){
    $("#done").click(function(){
        if(booking_complete)
        {
            booking_complete=false;
            $("#first").show();
            $("#second").hide();
        }
    });
});

function first_execute()
{
    document.getElementById("name_para").innerHTML=localStorage.getItem("theater")+" Theater "+localStorage.getItem("time")+" Show";
    for(var i=1;i<=total_seats;i++)
    {
        //if(document.getElementById(clas+i).disabled)
          //  break;
        a = document.getElementById("p"+i);
        var here=JSON.parse(localStorage.getItem(localStorage.getItem("theater")+"_"+localStorage.getItem("time")+"_p"));
        if(here[i]==1)
        {
            a.value=1;
            a.setAttribute("disabled", true);           
        }
        a = document.getElementById("c"+i);
        var here=JSON.parse(localStorage.getItem(localStorage.getItem("theater")+"_"+localStorage.getItem("time")+"_c"));
        if(here[i]==1)
        {
            a.value=1;
            a.setAttribute("disabled", true);           
        }
    }
}
