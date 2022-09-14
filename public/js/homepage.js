$(()=>{
    
    // $(".editBtn").click(function(){
    //     alert("!!!!!");
    //     // const editBtnEditBtn = $(this).prop("outerHTML");
    //     // console.log(editBtnEditBtn);
    // });
    $("body").on('click', '.editBtn', function(){
        const editBtn = $(this).html();
        const editBtnCopy = $(editBtn);
        const id = $(editBtnCopy)[0].innerHTML;
        console.log(id);
        $("#oldIdInput").val(id);
     });
});