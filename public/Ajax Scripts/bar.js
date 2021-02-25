$(function(){

    let currentURL = window.location.href;

    const getLastItem = currentURL =>
        currentURL.substring(currentURL.lastIndexOf('/')+1);

    const barID = getLastItem(currentURL);

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/barsID/' + barID,
        dataType:'json',
        success: function(bars) {
            
            barTitle = $('.title');
            descriptionText = $('#description-p');
            addressText = $('#address');
            contactText = $('#contact');
            scheduleText = $('#schedule');
            mapSection = $('#map');

            barTitle.empty();
            descriptionText.empty();
            addressText.empty();
            contactText.empty();
            scheduleText.empty();


            $.each(bars,(i, bar)=>{
                barTitle.append(bar.Name);
                descriptionText.append(bar.Description);
                addressText.append(bar.Address);
                addressText.append('<p id="lat" class="'+bar.Lat+'" style = "display : none"></p>'+
                                   '<p id="long" class="'+bar.Long+'" style = "display : none"></p>');
                contactText.append(bar.Contacto);
                scheduleText.append(bar.horario);
                console.log(bar.Name);
                $("#barImg").attr("src", bar.PictureURL);
                addressText.attr("ex","hello");

                
            });

            
        }
    }
    );
});



