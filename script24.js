function convert(){
    form=document.getElementById("temp");
input=parseFloat(form.elements[0].value);
inOp=form.elements[1].value;
outOp=form.elements[3].value;
if((inOp=='C')&&(outOp=='F'))
    res=input*(9/5)+32;
else if((inOp=='C')&&(outOp=='K'))
    res=input-273;
else if((inOp=='F')&&(outOp=='C'))
    res=(input-32)*(5/9);
else if((inOp=='F')&&(outOp=='K'))
    res=((input-32)*(5/9))-273;
else if((inOp=='K')&&(outOp=='C'))
    res=input+273;
else if((inOp=='K')&&(outOp=='F'))
    res=((input+273)*(9/5))+32;
else 
    res=input;

form.elements[2].value=res;

}


