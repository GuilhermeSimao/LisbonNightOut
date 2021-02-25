$(function(){

    let currentURL = window.location.href;

    const getLastItem = currentURL =>
        currentURL.substring(currentURL.lastIndexOf('/')+1);

    const eventID = getLastItem(currentURL);

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/eventsID/' + eventID,
        dataType:'json',
        success: function(events) {
            console.log('test')
            title = $('.title');
            descriptionText = $('#description-p');
            addressText = $('#address');
            scheduleText = $('#schedule');
            venueText = $('#venue');

            title.empty();
            descriptionText.empty();
            addressText.empty();
            scheduleText.empty();
            venueText.empty();


            $.each(events,(i, event)=>{
                title.append(event.Name);
                descriptionText.append(event.Description);
                addressText.append(event.Address);
                scheduleText.append(event.Date);
                venueText.append(event.Venue);
                $("#barImg").attr("src", event.PictureURL);
                addressText.append('<p id="lat" class="'+event.Lat+'" style = "display : none"></p>'+
                                   '<p id="long" class="'+event.Long+'" style = "display : none"></p>');
            });

            
        }
    });
});