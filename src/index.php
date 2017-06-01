<!DOCTYPE html>
<html lang="es">
<head>
    <?php include 'html/head.php' ?>
    <meta charset="UTF-8">
    <title>Marvel - Grability</title>
</head>
<body data-ng-app="marvelApp">
    <header>
        <?php include 'html/menu.php' ?>
        <img class="imgHead" src="img/image/marvel2.jpg" alt="Marvel">
        <h3 class="txtHead"><span style="font-size:1em;" class="icon-shield"></span> {{appTitle}}</h3>
    </header>
        <?php include 'html/nav.php' ?>
    <section class="cuerpo">
        <section class="hero-container" data-ng-controller="HeroesController as vm">
           <article id="{{hero.id}}" class="hero-item" data-ng-repeat="hero in vm.heroes">
                <img class="hero-image" data-ng-src="{{hero.image}}">
                <div class="contain" style="min-height:200px">
                    <h2>{{hero.name}}</h2>
                    <p>{{hero.description}}</p><br>
                    <ul class="icons">
                        <li><a href=""><span style="color:#009acf !important" class="icon-plus"></span></a></li>
                        <li><a href=""><span style="color:#009acf !important" class="icon-new-tab"></span></a></li>
                        <li><a href=""><span style="color:green !important" class="icon-grin"></span></a></li>
                        <li><a href=""><span style="color:red !important" class="icon-angry"></span></a></li>
                    </ul>
                </div>
            </article>
        </section>
    </section>
    <?php include 'html/footer.php' ?>
</body>
</html>