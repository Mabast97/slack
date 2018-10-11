
$('#sendText').on('keypress',(e) => {
    if(e.which == 13)
    {
        let newText = $('#sendText').val();
        $('.t2').append('<br/>'+newText);
        $('#sendText').val('');
    }
});
