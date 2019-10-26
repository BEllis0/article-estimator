
$(function estimator () {
    $('#estimateButton').click(function() {
        //let textValue = $.trim($("#text-box").val());
        let textValue = $('#text-box').val();
        let length = textValue.split(' ').length-1;
        let time = Math.round((length / 5) / 60);
        
        $('#minRead').html(`${time} MIN READ`);
    })
});

    
