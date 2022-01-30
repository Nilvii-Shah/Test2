var num=prompt("Enter your number");
num=parseInt(num);
var i;
i=parseInt(i);
var j;
j=parseInt(j);
var count;
count=parseInt(count);
var f;

if(isNaN(num)){
    alert("Please enter a valid number");
} 
else
{
    for(i=2;i<=num;i++)
       {
             count=i;
             f=0;
             for(j=2;j<count;j++)
             {
                     if(count%j==0)
                     {
                          f=1;
                          break;
                     }
             } 
             if(f==0)
                   console.log(count)
       } 
}