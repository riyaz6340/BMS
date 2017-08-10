            var count=0;
            var n;
            var type;
            var theater;
            var time;
            var clas;
            var d;
            var x;
            function store()
            {
                theater=document.getElementById("theater").value;
                time=document.getElementById("time").value;
                n=parseInt(document.getElementById("seats").value);
                type=document.getElementById("type").value;
                d=theater+time;
                x=d+type;
                if(type=='p')
                    $("#gold *").attr("disabled", "disabled").off('click');
                else
                    $("#premium *").attr("disabled", "disabled").off('click');
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
                    for(var i=1;i<21;i++)
                    {
                        a = document.getElementById(x+i);
                        if(a.value==1)
                            a.setAttribute("disabled", true);
                    }
                    count=0;
                    if(type=='p')
                        $("#gold *").attr("disabled", false);
                    else
                        $("#premium *").attr("disabled", false);
                }
            }
            function clean(c)
            {
            count=0;
                for(var i=1;i<21;i++)
                {
                    a = document.getElementById(type+i);
                    if(a.disabled)
                        continue
                    else
                        a.value=" ";
                }
                fun(c);
            }
            
$(document).ready(function(){
    $("#hide").click(function(){
        $("#first").hide();
        $("#"+d).show();
        
    });
});   


$(document).ready(function(){
    $("#done").click(function(){
        $("#first").show();
        $("#"+d).hide();
    });
});
$(document).ready(function(){
    $("#proceed").click(function(){
        console.log('sss');
        $("#first").show();
        $("#menu").hide();
    });
});