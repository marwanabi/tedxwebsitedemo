
$({
    countNum: $('.counter1').text()
}).animate({
    countNum: 100
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter1').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter1').text("100");
    }
});


$({
    countNum: $('.counter2').text()
}).animate({
    countNum: 3
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter2').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter2').text("3");
    }
});

$({
    countNum: $('.counter3').text()
}).animate({
    countNum: 1000
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter3').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter3').text("1000");
    }
});

$({
    countNum: $('.counter4').text()
}).animate({
    countNum: 945
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter4').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter4').text("945");
    }
});


$({
    countNum: $('.counter5').text()
}).animate({
    countNum: 43
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter5').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter5').text("43");
    }
});
