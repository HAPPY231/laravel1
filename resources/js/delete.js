$(function() {
    $('.delete').click(function(){
        Swal.fire({
            title: 'Czy napewno chcesz usunać rekord?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tak',
            cancelButtonText: 'Nie'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    $.ajax({
                        method: "DELETE",
                        url: deleteUrl + $(this).data("id"),
                        // data: {id:$(this).data("id")},
                    })
                    .done(function(data){
                        window.location.reload();
                    })
                    .fail(function(data){
                        console.log(data.responseJSON.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data.responseJSON.status,
                            text: data.responseJSON.message
                        });
                    })
                )
            }
        })

    });
});
