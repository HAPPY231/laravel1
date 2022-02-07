$(function(){
    $('a#filter-button').click(function(){
        const form = $('form.sidebar-filter').serialize();
        $.ajax({
            method: "GET",
            url: "/",
            data: form
        })
            .done(function(response){
                $('div#products-wrapper').empty();
                $.each(response.data, function(index,product){
                   const html = '\n' +
                       '                        <div class="col-6 col-md-6 col-lg-4 mb-3">\n' +
                       '                            <a href="/products/'+ product.id + '" class="font-weight-bold text-dark text-uppercase text-decoration-none small">\n' +
                       '                            <div class="card border-0" >\n' +
                       '                                <div class="card-img-top mx-auto" style="width: 240px; height: 240px;">\n' +
                       '                                  <img class="w-100 h-100" src="'+ getImage(product) +'"' +
                       '                                </div>\n' +
                       '                                <div class="card-body text-center">\n' +
                       '                                    <h4 class="card-title">\n' +
                       '\n' +product.name+'\n' +

                       '                                    </h4>\n' +
                       '                                    <h5 class="card-price small">\n' +
                       '                                        <i>PLN' + product.price + '</i>\n' +
                       '                                    </h5>\n' +
                       '                                </div>\n' +
                       '                            </div>\n' +
                       '                            </a>\n' +
                       '                        </div>';
                    $('div#products-wrapper').append(html);
                });
            })
            .fail(function(data){
               alert("ERROR")
            })

            function getImage(product){
            if(!!product.image_path){
                return storagePath + product.image_path;
            }
            return defaultImage;
            }
    })
})
