$(function(){
     // preload audio
     var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault()
         // first pause the audio (in case it is still playing)
         toast.pause();
         // reset the audio
         toast.currentTime = 0;;
        // play audio
        toast.play();

        //displays to console
        console.log($(this).data('name'))
        console.log($(this).data('discount-code'))
        
        //get data-attributes
        var productName = $(this).data('name');
        var discountCode = $(this).data('discount-code')

        // display the data-attributes as values
        $('#liveToast').find('.mr-auto').text(productName);
        $('#liveToast').find('#code').text(discountCode);

        // show toast
        $('#liveToast').toast({ autohide: false }).toast('show');

        //close toast with 'esc' key
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape') {
                $('#liveToast').toast('hide');
            }
        })
    });
});