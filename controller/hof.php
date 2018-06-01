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

        <link type="text/css" rel="stylesheet" href="framework/flexbox/flexboxgrid.min.css">
        <link type="text/css" rel="stylesheet" href="framework/jquery-ui/jquery-ui.min.css">
        <link type="text/css" rel="stylesheet" href="framework/loading-bar/loading-bar.css"/>
    <!-- END CSS -->

    <link rel="icon" href="">
</head>
<body>
    <!-- HEADER -->
        <header>

        </header>
    <!-- END HEADER -->
    
    

    <!-- MODALE BUILDINGS -->
        <?php include_once('../view/import/modale-buildings_and_Flags.php'); ?>
    <!-- END MODALE BUILDINGS -->
    
    <!-- MODALE BUILDINGS -->
        <?php include_once('../view/import/modale-runes.php'); ?>
    <!-- END MODALE BUILDINGS -->
    
    

    <!-- SECTION -->
        <section>    
            <div class=row>  
                <?php include_once('../view/import/nav.php'); ?>

                <?php include_once('../view/import/interface-simulate.php'); ?>
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
        <script src="framework/loading-bar/loading-bar.js"></script>

        <script src="js/nav.js"></script>

        <?php include_once('../view/import/js-simulator.php'); ?>
        <script src="model/js/data/donjons/hof.js"></script>
        
        <script type="text/javascript">
            $(document).ready(function(){     
                classEnnemiesWaves = hof10;
            });
        </script>
    <!-- END JAVASCRIPT -->
</body>
</html>