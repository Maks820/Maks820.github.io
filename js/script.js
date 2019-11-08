$('.menu-btn').click(function(){
  $('.menu').toggleClass('visible');
});

 window.setTimeout(function () {
        var iframe = document.getElementById('googlemap');
        iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.210321413295!2d-80.1913079854764!3d25.763615714810207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6823bcf83f7%3A0xef0b288e10bb269c!2zMTAwMSBCcmlja2VsbCBCYXkgRHIgIzE5MDAsIE1pYW1pLCBGTCAzMzEzMSwg0KHQqNCQ!5e0!3m2!1sru!2sby!4v1573058379817!5m2!1sru!2sby');
}, 5000);   