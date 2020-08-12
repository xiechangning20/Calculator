function init(){
	var num=document.getElementById("num");
	 num.value=0;
	 var num1=0;
     var num2=0;
	 num.disabled="disabled";
	 var fh;


 var button=document.getElementsByTagName("input");
     for (i=0;i<button.length;i++){
     	button[i].onclick=function numclick(){
     	 var num=document.getElementById("num");
     	 var n = num.value;
     	  if(!isNaN(this.value)){
            if(num1 == 0)  {
            if(n == "0"){
            n=this.value;
            num.value = n;
              }else{
              n = n + this.value;
              num.value = n;   
               }
             }else{
               if(num2 == "0"){
                num2 = this.value;
                num.value = num2;
               }else{
                num2 = n + this.value;
                num.value = num2;
               }
             }
            }
            

           else{
	        var nonum=this.value;
	        switch(nonum){
            case "c":
            num.value=0;
            num1=0;
            num2=0;
            break;
            //if the user has already conducted unfinshed calculation, conduct
            // the previous calculation first
            case "+":
              
              operation(fh,num1,num2,num);
              num1 = num.value;
               num2 = 0;
               fh= "+";
             break;
            case "-":
              operation(fh,num1,num2,num);
              
               num1 = num.value;
               num2 = 0;
               fh="-"
              break;
            case "*":
             operation(fh,num1,num2,num);
              
              num1 = num.value;
              num2 = 0;
              fh="*";
              break;
            case "/":
             operation(fh,num1,num2,num);
              
               num1 = num.value;
               num2 = 0;
               fh="/";
               break;

            case ".":
             num.value=point(num.value);
             break;
            case "←":
             num.value=back(num.value);
             break;

            case "+/-":
            if(num.value != 0){
             num.value=sign(num.value);}
             break;

            case "=":
              operation(fh,num1,num2,num);
               break;
	     }  
        }
     } 
    }
}
        /* . */
          function point(n){
            if(n.indexOf(".")==-1){
            	  n=n+".";
            }
            
            return n;
          }  
        /*is null?*/
         function isNull(n){
            if(n==0 || n.length==0)
                return true;
            else return false;

         }

        /*back*/
         function back(n){
            if(!isNull(n)){
             n=n.substr(0,n.length-1);
            }

            else n=0;
            return n;
         }
        /* -/+ */
         function sign(n){
            if(n.indexOf("-")==-1) {
                n="-"+n;
            }
            else {
                n=n.substr(1,n.length);
            }
            return n;
         }

         //operation
          function operation(fh,num1,num2,num){
             switch(fh){
              //fix the bug of JS float accuracy

              case "+":
               if(num1!=0 && num2!=0){ 
                num.value=((num1*Math.pow(10,8))+(num2*Math.pow(10,8)))/Math.pow(10,8);
                num1 = num.value;
                num2 = 0;}
                break;
              case "-":
               if(num1!=0 && num2!=0){ 
                num.value=((num1*Math.pow(10,8))-(num2*Math.pow(10,8)))/Math.pow(10,8);
                num1 = num.value;
                num2 = 0;}
               break;
              case "*":
              if(num1!=0 && num2!=0){
               num.value=((num1*Math.pow(10,8))*(num2*Math.pow(10,8)))/Math.pow(10,16);
                num1 = num.value;
                num2 = 0;
                       }
                break;
              case "/":
               if(num.value==0){
                num.value=0;
                alert("0 cannot be divided!")
                  }
                 if(num1!=0 && num2!=0){
                 num.value=((num1*Math.pow(10,8))/(num2*Math.pow(10,8)));
                 num1 = num.value;
                num2 = 0;}
                 break;
           
                }
          }

     
     


