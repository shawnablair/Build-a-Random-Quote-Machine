$(document).ready(function(){
  
  function getQuote(){
    
    var quotes = ["The World is a book and those who do not travel read only one page", "The greatest thing you'll ever learn is just to love and be loved in return", "I am someone who is looking for love. Real love. Ridiculous, inconvenient, consuming, can't-live-with-out-each-other love. And I don't think that love is here in this expensive suite in this lovely hotel."];
    var author = ["- Saint Augustine", "- Toulouse Lautrec", "- Carrie Bradshaw"];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
    $(".btn").on("click", function(){
                 getQuote();
    
  }); 
});