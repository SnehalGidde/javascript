  

  var count = 1;
 function voteEligiblity(age){
   if(age==undefined || age==null || age==0 || age<0 || age>120){
   
    console.log(`${count}: Your Age:  ${age} ==> This is invalid data`);
   }
   else if( age<18){
    console.log(`${count}: Your Age:  ${age} ==> you are not eligible for voting`);
   }
   else{
    console.log(`${count}: Your Age:  ${age} ==> you are eligible for voting`);
   }
   count++;
   console.log(`----------------------------------------------`);
 }
 voteEligiblity(45)
 voteEligiblity(17)
 voteEligiblity(8)
 voteEligiblity(20)
 voteEligiblity(-10)
 voteEligiblity(200)
 voteEligiblity(0)
 voteEligiblity(undefined)
 voteEligiblity(null)
 
 
 
