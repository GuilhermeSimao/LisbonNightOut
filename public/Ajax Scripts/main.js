

$(function(){

//  LOAD EVENT CONTENT ON MAIN PAGE
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/events',
        dataType:'json',
        success: function(events) {
            
            eventBox = $('#event-content');

            eventBox.empty();

            $.each(events,(i, event)=>{
                if(i<4){
                    eventBox.append(
                        '<div class="box event" id="'+ event.id +' ">' +
                            '<div class="img-container">'+
                                '<img src="'+ event.PictureURL +'">'+
                            '</div>'+
                            '<div class="text">'+
                            ' <h2 class="title " id="event-name">'+ event.Name +'</h2>'+
                            '</div>'+
                        '</div>');
                }else{
                    eventBox.append(
                        '<div class="box extendedEvent event" id="'+ event.id +'"  " style = "display : none">' +
                            '<div class="img-container">'+
                                '<img src="/img/event-example.jpg">'+
                            '</div>'+
                            '<div class="text">'+
                            ' <h2 class="title " id="event-name">'+ event.Name +'</h2>'+
                            '</div>'+
                        '</div>');
                }
                
            });

            $('#eventToggler').click(()=>{
                $('.extendedEvent').toggle();
                if($('#eventToggler').html() == "View More")
                {
                    $('#eventToggler').html("Show Less") 
                }
                else
                {
                    $('#eventToggler').html("View More") 
                }
            });
            
        }
    });
//  LOAD BAR CONTENT ON MAIN PAGE
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/bars',
        dataType:'json',
        success: function(bars) {
            
            barBox = $('#bar-content');

            barBox.empty();
        
            $.each(bars,(i, bar)=>{
                if(i<4){
                    barBox.append(
                        '<div class="box bar" id="' + bar.id +'">' +
                            '<div class="img-container">'+
                                '<img src="'+bar.PictureURL+'">'+
                            '</div>'+
                            '<div class="text">'+
                            ' <h2 class="title " id="event-name">'+ bar.Name +'</h2>'+
                                
                            '</div>'+
                        '</div>');
                }
                else{
                    barBox.append(
                        '<div class="box bar extendedBar" id="' + bar.id +'" style = "display : none">' +
                            '<div class="img-container">'+
                                '<img src="'+bar.PictureURL+'">'+
                            '</div>'+
                            '<div class="text">'+
                            ' <h2 class="title " id="event-name">'+ bar.Name +'</h2>'+
                                
                            '</div>'+
                        '</div>');
                }
                
            });

            $('#barToggle').click(()=>{
                $('.extendedBar').toggle();
                if($('#barToggle').html() == "View More")
                {
                    $('#barToggle').html("Show Less") 
                }
                else
                {
                    $('#barToggle').html("View More") 
                }
            });
            
        }
    });
    //  LOAD CLUB CONTENT ON MAIN PAGE
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/clubs',
        dataType:'json',
        success: function(clubs) {
            
            clubBox = $('#club-content');

            clubBox.empty();
        
            $.each(clubs,(i, club)=>{
                console.log(club)
                if(i<4){
                    clubBox.append(
                        '<div class="box club" id="' + club.id +'">' +
                            '<div class="img-container">'+
                                '<img src="'+club.PictureURL+'">'+
                            '</div>'+
                            '<div class="text">'+
                            ' <h2 class="title " id="event-name">'+ club.Name +'</h2>'+
                                
                            '</div>'+
                        '</div>');
                }
                else{
                    clubBox.append(
                        '<div class="box club extendedClub" id="' + club.id +'" style = "display : none">' +
                            '<div class="img-container">'+
                                '<img src="'+club.PictureURL+'">'+
                            '</div>'+
                            '<div class="text">'+
                            ' <h2 class="title " id="event-name">'+ club.Name +'</h2>'+
                                
                            '</div>'+
                        '</div>');
                }
                
            });

            $('#clubToggler').click(()=>{
                $('.extendedClub').toggle();
                if($('#clubToggler').html() == "View More")
                {
                    $('#clubToggler').html("Show Less") 
                }
                else
                {
                    $('#clubToggler').html("View More") 
                }
            });
            
        }
    });

    

//FAZ O REDIRECT PARA A PAGINA DE UM DETERMINADO BAR
$(document).on('click', '.bar', function () {
    var id = $(this).attr('id');
    console.log(id);
    window.location.href = "/bar/" + id;
});

//FAZ O REDIRECT PARA A PAGINA DE UM DETERMINADO EVENTO
$(document).on('click', '.event', function () {
    var id = $(this).attr('id');
    console.log(id);
    window.location.href = "/event/" + id;
});

//FAZ O REDIRECT PARA A PAGINA DE UM DETERMINADO CLUBE
$(document).on('click', '.club', function () {
    var id = $(this).attr('id');
    console.log(id);
    window.location.href = "/club/" + id;
});


});



            