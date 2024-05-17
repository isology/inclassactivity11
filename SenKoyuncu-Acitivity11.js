$(document).ready(function() {
    $('#nav_list a').click(function(event) {
        event.preventDefault(); 


        var speakerTitle = $(this).attr('title');
        var jsonFile = 'json_files/' + speakerTitle + '.json';

        console.log('Loading JSON file:', jsonFile);

        $.getJSON(jsonFile, function(data) {

            
                var speakerData = data.speakers[0];
                if (speakerData.title && speakerData.image && speakerData.month && speakerData.speaker && speakerData.text) {
                    $('main').empty();

                    var newContent = '<h1>' + speakerData.title + '</h1>';
                    newContent += '<img src="' + speakerData.image + '" alt="' + speakerData.speaker + '">';
                    newContent += '<h2>' + speakerData.month + '<br>' + speakerData.speaker + '</h2>';
                    newContent += '<p>' + speakerData.text + '</p>';

                    $('main').html(newContent);
                } 
            
        })
    });
}); // end ready
