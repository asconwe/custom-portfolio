$(document).ready(function () { 
    
    function openContentDiv() { 
        let boxWidth = $('.responsive-box').css('width');
        boxWidth = parseInt(boxWidth.slice(0, 3));
        const contentWidth = boxWidth - 200;
        console.log(contentWidth);
        $('.content-div').attr('class', 'content-div visible')
        $('.content-div').animate({ width: contentWidth }, function () {
            console.log('finished animating');
        });
    }

    function closeContentDiv() {
        
    }

    openContentDiv();
})