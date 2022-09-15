$(() => {
    $("#searchBarInput").keyup(function () {
       console.log("key up");
        $.ajax({
            url: "http://localhost:/search?searchedValue="+$("#searchBarInput").val()
          }).done(function(resultsArr) {
            $("#searchedCardsResult").html('');
            for (let i = 0; i < resultsArr.length; i++) {
                let searchedCardsTemplate = $("#searchedCardsTemplate").html();
                const currResult = resultsArr[i];
                for (const key in currResult) {
                    searchedCardsTemplate = searchedCardsTemplate.replaceAll('{'+key+'}', currResult[key]);
                }
                $("#searchedCardsResult").append(searchedCardsTemplate);
            }
          });
    });    
});