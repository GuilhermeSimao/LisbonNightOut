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
            contactText = $('#contact');
            scheduleText = $('#schedule');

            title.empty();
            descriptionText.empty();
            addressText.empty();
            contactText.empty();
            scheduleText.empty();


            $.each(events,(i, event)=>{
                title.append(event.Name);
                descriptionText.append(event.Description);
                addressText.append(event.Address);
                contactText.append(event.Contacto);
                scheduleText.append(event.horario);
                console.log(event.Name);
                $("#barImg").attr("src", event.PictureURL);
            });

            
        }
    });
});