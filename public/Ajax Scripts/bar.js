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

            barTitle.empty();

            $.each(bars,(i, bar)=>{
                barTitle.append(bar.Name);
                console.log(bar.Name);
            });

            
        }
    });
});