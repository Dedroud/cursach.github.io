$(document).ready(function(){
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 2;
    
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');

    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemCount = item.length;

    const itemWidth = container.width() / slidesToShow;
    
    const movePosition = slidesToScroll * itemWidth;




    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    });




    btnPrev.click(function(){
        position += movePosition;
        setPosition();
        checkBtns();
    });

    btnNext.click(function(){
        position -= movePosition;
        setPosition();
        checkBtns();
    });





    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled', 
            position <= -(itemCount - slidesToShow) * itemWidth
        );
    };

    checkBtns();
});










