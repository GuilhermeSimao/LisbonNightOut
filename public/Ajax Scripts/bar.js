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
            
            barTitle = $('.bar-title');
            descriptionText = $('#description-p');
            addressText = $('#address');
            contactText = $('#contact');
            scheduleText = $('#schedule');

            barTitle.empty();
            descriptionText.empty();
            addressText.empty();
            contactText.empty();
            scheduleText.empty();


            $.each(bars,(i, bar)=>{
                barTitle.append(bar.Name);
                descriptionText.append(bar.Description);
                addressText.append(bar.Address);
                contactText.append(bar.Contacto);
                scheduleText.append(bar.horario);
                console.log(bar.Name);
                $("#barImg").attr("src", bar.PictureURL);
            });

            
        }
    });
});