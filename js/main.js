var opened = false;

$('.slide-container').on('click', function(){
   
    var slides = $('.slide-container');
    
    if(opened === true){
        
        slides.transition({
            width:'25%',
            complete:function(){
                
                 
                
            }
        });
        $('.slide-content').hide();
       
        opened = false;
        
    }else{    

        for(var i=0;i<slides.length;i++){

            var slide = slides[i];

            if(slide !== this){

                $(slide).transition({ width:'0%' });

            }

        }
        
        $(this).find('.slide-content').show();

        $(this).transition({ 
            width:'100%',
            complete:function(){
                
                // optional fullpage plugin
                // remove overflow:auto from .slide-container in css to make it work. BUGGY!
                //if(!$(this).hasClass('fullpage-wrapper')){
                //    $(this).fullpage();
                //}
                
            }
        });

        opened = true;
        
    }
    
});



