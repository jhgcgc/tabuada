function veracertos(){

    var player = document.getElementById("player");
    
    var track ="success-1-6297.mp3"
    var track2 ="negative_beeps-6008.mp3"

    var input_0 = window.document.getElementById("input0");
    var input_1 = window.document.getElementById("input1");
    var input_2 = window.document.getElementById("input2");
    var input_3 = window.document.getElementById("input3");
    var input_4 = window.document.getElementById("input4");
    var input_5 = window.document.getElementById("input5");
    var input_6 = window.document.getElementById("input6");
    var input_7 = window.document.getElementById("input7");
    var input_8 = window.document.getElementById("input8");
    var input_9 = window.document.getElementById("input9");
    var input_10 = window.document.getElementById("input10");

    
    
    var valor_entrada_input0 = Number(input_0.value);
    var valor_entrada_input1 = Number(input_1.value);
    var valor_entrada_input2 = Number(input_2.value);
    var valor_entrada_input3 = Number(input_3.value);
    var valor_entrada_input4 = Number(input_4.value);
    var valor_entrada_input5 = Number(input_5.value);
    var valor_entrada_input6 = Number(input_6.value);
    var valor_entrada_input7 = Number(input_7.value);
    var valor_entrada_input8 = Number(input_8.value);
    var valor_entrada_input9 = Number(input_9.value);
    var valor_entrada_input10 = Number(input_10.value);

   /* var todos_valores_entrada_input=[valor_entrada_input0,valor_entrada_input1,valor_entrada_input2,valor_entrada_input3,valor_entrada_input4,valor_entrada_input5,valor_entrada_input6,valor_entrada_input7,valor_entrada_input8,valor_entrada_input9,valor_entrada_input10]; */
   
   if (valor_entrada_input0==(2*0)) {
      input_0.style.background="lime";
     }else{
      input_0.style.background="red";
     }
  
  /*-----------------------------------------*/
  if (valor_entrada_input1==(2*1)) {
   input_1.style.background="lime";
  }else if(valor_entrada_input1==""){
  input_1.style.background="white";
  alert("preenca todos os campos");
  }else{
   input_1.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input2==(2*2)) {
   input_2.style.background="lime";
  }else if(valor_entrada_input2==""){
    input_2.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_2.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input3==(2*3)) {
   input_3.style.background="lime";
  }else if(valor_entrada_input3==""){
    input_3.style.background="white";
  }else{
   input_3.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input4==(2*4)) {
   input_4.style.background="lime";
  }else if(valor_entrada_input4==""){
    input_4.style.background="white";
    
    }else{
   input_4.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input5==(2*5)) {
   input_5.style.background="lime";
  }else if(valor_entrada_input5==""){
    input_5.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_5.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input6==(2*6)) {
   input_6.style.background="lime";
  }else if(valor_entrada_input6==""){
    input_6.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_6.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input7==(2*7)) {
   input_7.style.background="lime";
  }else if(valor_entrada_input7==""){
    input_7.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_7.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input8==(2*8)) {
   input_8.style.background="lime";
  }else if(valor_entrada_input8==""){
    input_8.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_8.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input9==(2*9)) {
   input_9.style.background="lime";
  }else if(valor_entrada_input9==""){
    input_9.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_9.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input10==(2*10)) {
   input_10.style.background="lime";
  }else if(valor_entrada_input10==""){
    input_10.style.background="white";
    alert("preenca todos os campos");
    }else{
   input_10.style.background="red";
  }

  
  if (valor_entrada_input0==(2*0)&&valor_entrada_input1==(2*1)&&valor_entrada_input2==(2*2)&&valor_entrada_input3==(2*3)&&valor_entrada_input4==(2*4)&&valor_entrada_input5==(2*5)&&valor_entrada_input6==(2*6)&&valor_entrada_input7==(2*7)&&valor_entrada_input8==(2*8)&&valor_entrada_input9==(2*9)&&valor_entrada_input10==(2*10)){
    
    player.src=track;
    player.play();

    alert("Parabens!!! voce acertou todas da tabela 1.");
    
  }
 
  if (valor_entrada_input0!=(2*0)||valor_entrada_input1!=(2*1)||valor_entrada_input2!=(2*2)||valor_entrada_input3!=(2*3)||valor_entrada_input4!=(2*4)||valor_entrada_input5!=(2*5)||valor_entrada_input6!=(2*6)||valor_entrada_input7!=(2*7)||valor_entrada_input8!=(2*8)||valor_entrada_input9!=(2*9)||valor_entrada_input10!=(2*10)){
    
    player.src=track2;
    player.play();

    alert("Você Errou!!! tente Novamente.");
    
  }


 


}
