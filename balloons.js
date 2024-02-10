$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    //1.Randomize the attention seeker in balloons.html. Choose a random animate.css attention seeker and apply when the page loads using JavaScript.
    // array to store animate.css animations
    //https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    var animationArray = ['bounce','flash','pulse','rubberBand','shakeX','shakeY','headShake','swing','tada','wobble','jello','heartBeat']

    const randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];
    
    //assign class to .animate_animated
    $('h1.animate__animated').addClass('animate__' + randomAnimation);

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // 2. Create a toast when the submit button is clicked only if there are no balloons selected.
    $('#submit').click(function () {
        if (!$('.form-check-input').is(':checked')) {

            $('.submitToast').removeClass('d-none').toast('show');
        }
    });

    //3. Add ability to check / uncheck all balloons with a single click (using a button, checkbox, link, etc…)
    $('.btn-group-toggle').on('click', function() {
        var checkboxes = $(this).find('input:checked').attr('id');

        // check for select all 
        if(checkboxes === 'selectAll') {
            $('.form-check-input').prop('checked', true);
        }
        //check for clear selection
        else if(checkboxes === 'clearCBoxes') {
            $('.form-check-input').prop('checked', false);
        }
    });

    //4. Hovering the mouse over a checkbox label should change the color of the h1 element (Happy Birthday!) to the balloon color indicated in the label. Moving the mouse out of the label should reset the color
    $('.form-check-label').hover(function() {
        //obtain color of ballon from label
        var balloonColor = $(this).attr('for');

        //change color of h1 when hovered
        $('h1.animate__animated').css('color', balloonColor);
    }, function() {

        //reset color when leaving the hover area - h1
        $('h1.animate__animated').css('color', 'slategray')
    });
});


// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
     $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
     $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

