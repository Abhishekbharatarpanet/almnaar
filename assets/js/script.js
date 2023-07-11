$( document ).ready(function() {
  
 $(":file").on("change", function(e){
  
    console.log(e)
 
  let get_att = e.currentTarget.id;

  $(`[for=${get_att}]`).html(this.files[0].name);
  
 });



 $('.edit_btn').on('click',function(){
    $('.popup-overlay').css('display', 'flex');
 });

 $('.close-btn').on('click',function(){
    $('.popup-overlay').hide();
 });
    
});