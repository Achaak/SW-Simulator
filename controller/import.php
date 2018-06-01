<!DOCTYPE html>
<html lang="fr">
<head>
    <!--<base href="/">-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <title>Title</title>
    <meta name="description" content="Description" />
    <meta property="og:title" content="Title" />
    <meta property="og:description" content="Description" />
    <meta property="og:image" content="" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
        <link type="text/css" rel="stylesheet" href="view/css/common.css">
        <link type="text/css" rel="stylesheet" href="view/css/import.css">
        <link type="text/css" rel="stylesheet" href="framework/flexbox/flexboxgrid.min.css">
        <link type="text/css" rel="stylesheet" href="framework/jquery-ui/jquery-ui.min.css">
    <!-- END CSS -->

    <link rel="icon" href="">
</head>
<body>
    <!-- HEADER -->
        <header>

        </header>
    <!-- END HEADER -->
    
    

    <!-- SECTION -->
        <section>    
            <div class=row>  
                <?php include_once('../view/import/nav.php'); ?>
                
                <article class="col-xs-12">
                    <div class=row>    
                        <div class="col-xs-12">
                            <h2>Import</h2>
                        </div>

                        <div class="col-xs-12">
                            <form class='import-json'>
                                <div class="input-file-container">
                                    <input type="file" id="input-file" class='input-file' name="input-file" accept=".json">
                                    <label for="input-file" class='text-input-file'>Select JSON file</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    <!-- END SECTION -->


    
    <!-- FOOTER -->
        <footer>

        </footer>
    <!-- END FOOTER -->



    <!-- JAVASCRIPT -->
        <script src="framework/jquery/jquery.min.js"></script>
        <script src="framework/jquery-ui/jquery-ui.min.js"></script>
        <script src="model/js/data/list_monsters.js"></script>
        <script src="js/nav.js"></script>
        
        <script type="text/javascript">
            $(document).ready(function(){               
                $(".input-file").change(function(e){
                    $('.text-input-file').text($(this).prop('files')[0].name);
                    
                    var formData = new FormData();            
                    var files = $(this).prop('files')[0];
                    formData.append('file', files);

                    $.ajax({    
                        url: "model/php/read-JSON.php", 
                        type: "POST",
                        data: formData,
                        dataType: 'json',
                        contentType: false,
                        processData: false,
                        success: function(results){  
                            if(results.codeError == 0) {
                                var unit_list_results = results.contentJson.unit_list;

                                var unit_list = Array();
                                for (var i = 0; i < results.contentJson.unit_list.length; i++) {
                                   for (var j = 0; j < list.length; j++) {
                                        if(results.contentJson.unit_list[i].unit_master_id == list[j].unit_master_id) {
                                            console.log(list[j].name);

                                        }
                                   }
                                }
                            }
                        }
                    });
                });
            });
        </script>
    <!-- END JAVASCRIPT -->
</body>
</html>