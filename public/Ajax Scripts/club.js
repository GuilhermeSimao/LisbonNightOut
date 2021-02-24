$(function(){

    let currentURL = window.location.href;

    const getLastItem = currentURL =>
        currentURL.substring(currentURL.lastIndexOf('/')+1);

    const clubID = getLastItem(currentURL);

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/clubsID/' + clubID,
        dataType:'json',
        success: function(clubs) {
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


            $.each(clubs,(i, club)=>{
                title.append(club.Name);
                descriptionText.append(club.Description);
                addressText.append(club.Address);
                contactText.append(club.Contacto);
                scheduleText.append(club.horario);
                console.log(club.Name);
                $("#barImg").attr("src", club.PictureURL);
            });

            
        }
    });
});