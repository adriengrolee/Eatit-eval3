<?php
/**
 * The main template file
 *
 * ...
 *
 * @package WordPress
 * @subpackage Startheme
 * @since 1.0.0
 *
 */
$lastspots = get_posts( array(
	'numberposts' => 5,
  'post_type' => 'spot',
  'orderby' => 'rand'
) );

$focuspost = get_posts( array(
	'posts_per_page' => 1,
  'post__in' => get_option( 'sticky_posts' ),
  'ignore_sticky_posts' => 1
) );
get_header();

$taxonomie = get_term( array(
  "taxonomies" => "specialite",
  "hide_empty" => false ,
));


$specs= get_terms (array(
   'taxonomy' => 'specialites',
   'hide_empty' => false
 ) );


 
 ?>

<main>




<header class="main-header container">

<?php echo get_the_post_thumbnail( get_the_ID(), 'full', array( 'class' => '' ) ); ?>

 
    <div class="container">

      <h3 class="page-title mr-auto mx-3">
        Toutes la cuisine à emporter à 2 coups de pédales
      </h3>

    </div>
    
    <div class="carousel-posts owl-carousel owl-theme">

      <img src="<?= get_template_directory_uri(); ?>/src/images/livraions-velo-04ok.jpg" alt="">      
      

    </div>

    

  </header>


 
  <section class="etapes py-5 bg-warning">

      <div class="container my-5 p-3">
      <div class="row">

        <div class="col-sm-6 col-md-4">
          <article class="">
            <h1 class=" text-decoration-none-primary"> 1 </h1>
            <h3 class=""> Séléctionner votre repas</h3>
            <img class="" src="<?= get_template_directory_uri(); ?>/src/images/MENU.png" alt="Card image cap">
          </article>
        </div>

        <div class="col-sm-6 col-md-4">
          <article class="">
            <h1 class="text-decoration-none-primary"> 2 </h1>
            <h3 class=""> Indiquez votre adresse</h3>
            <img class="" src="<?= get_template_directory_uri(); ?>/src/images/logo_local.png" alt="Card image cap">
          </article>
        </div>

        <div class="col-sm-6 col-md-4">
          <article class="">
            <h1 class="text-decoration-none-primary"> 3 </h1>
            <h3 class=""> Passez votre commande </h3>
            <img class="" src="<?= get_template_directory_uri(); ?>/src/images/CALPIN.png" alt="Card image cap">
          </article>
        </div>

      </div>
      </div>

      

      <div class="text-center">

        <a href="#" class="btn btn-secondary btn-lg my-4">NOS MENUS</a>

      </div>
    
  </section>

  <section class="actualites  bg-warning">

      <div class="articles container py-5">

      <h1>Cette semaine chez Eat-it</h1>

        <div class="actu">
          <a class="text-decoration-none" href=""><img class="my-4" src="<?= get_template_directory_uri(); ?>/src/images/repas-burger-01.jpg" alt="">
            <h3 class="mb-y-1">Les burgers débraquent chez Eat-it</h3>
          </a>

          <div class="text-center">
            <a href="#" class="btn btn-secondary ml">En savoir +</a>
          </div>

        </div>

        <div class="actu">
          <a class="text-decoration-none" href=""><img class="my-4" src="<?= get_template_directory_uri(); ?>/src/images/repas-sushi-ramen-08.jpg" alt="">
            <h3 class="mb-y-3">Découvrez les ramens</h3>
          </a>


          <div class="text-center">
            <a href="#" class="btn btn-secondary">En savoir +</a>
          </div>

        </div>
        <div class="actu">
          <a class="text-decoration-none" href=""><img class="my-4" src="<?= get_template_directory_uri(); ?>/src/images/couscous-01.jpg" alt="">
            <h3 class="mb-y-3">Votre couscous, chez vous, à vélo</h3>
          </a>

          <div class="text-center">

            <a href="#" class="btn btn-secondary">En savoir +</a>
          </div>
        </div>
      </div>

    </section>

    <section class="actualites partenaires py-5 bg-warning">

      <div class="actu container p-auto">

        <div class="actu-resto row my-10">
          <div class="col-sm-6 col-md-4">
            <a class="text-decoration-none" href="#"> <img src="<?= get_template_directory_uri(); ?>/src/images/repas-sushi-ramen-09.jpg" alt="">
              <div class="social-partenaire py-1">
                <img class="pull-right" src="<?= get_template_directory_uri(); ?>/src/images/logo_IG_rouge.png" alt="">
              </div>
              <h3 class="py-3">Et une commande de plus avec #eatit</h3>
            </a>
          </div>

          <div class="col-sm-6 col-md-4">
            <a class="text-decoration-none" href="#"> <img src="<?= get_template_directory_uri(); ?>/src/images/repas-coree-01.jpg" alt="">
              <div class="social-partenaire py-1">
                <img class="pull-right" src="<?= get_template_directory_uri(); ?>/src/images/logo_IG_rouge.png" alt="">
              </div>
              <h3 class="py-3">On livre chez vous avec #eatit</h3>
            </a>
          </div>

          <div class="col-sm-6 col-md-4 d-none d-md-block">
            <a class="text-decoration-none" href="#"> <img src="<?= get_template_directory_uri(); ?>/src/images/repas-burger-04.jpg" alt="">
              <div class="social-partenaire py-1">
                <img class="pull-right" src="<?= get_template_directory_uri(); ?>/src/images/logo_IG_rouge.png" alt="">
              </div>
              <h3 class="py-3">Le burger du jour livré avec #eatit   <br> </h3>
            </a>
          </div>

        </div>

        <div class="bouton-actu-resto text-center">

          <a href="#" class="btn btn-secondary mt-3">+ D'ACTUALITES</a>
        </div>

      </div>

    </section>

    <section class="temoignages d-none d-md-block bg-white py-5 ">

      <div class="container row m-auto">
        <div class="col-lg-6">
          <a class="text-decoration-none" href="#">
            <p class="font-weight-bold">
              Entreprise très réactive et serviable. Nous faisons régulièrement appel à eux dans le cadre de séminaires
              et
              en sommes satisfait, ainsi que nos clients. Bravo à vous.
              <span class="text-primary"> - Martine Niesec </span>

            </p>
            <img class="pull-right" src="<?= get_template_directory_uri(); ?>/src/images/logo-tw-temoignage.png" alt="">
          </a>
        </div>

        <div class="col-lg-6">
          <a class="text-decoration-none" href="#">
            <p class="font-weight-bold">
              C’est un service de livraison que je recommande, je ne suis pas déçue ! Un jour de pluie ou de grand
              froid, ne
              sortez donc pas de chez vous ! <br> <span class="text-primary"> - Gaspard Alizan </span>

            </p>
            <img class="pull-right" src="<?= get_template_directory_uri(); ?>/src/images/logo-fb-temoignage.png" alt="">
          </a>
        </div>

      </div>

    </section>

    <section class="info bg-warning py-5">

      <div class="container py-2">
        <h1 class="my-4">Chez Eat-it, notre démarche environemental, c'est tout les jours.</h1>

        <div class="livraisons row">

          <div class="col-sm-6">
            <img class="py-1" src="<?= get_template_directory_uri(); ?>/src/images/repas-orient-01.jpg" alt="">
          </div>

          <p class="col-sm-6 font-weight-bold py-5 mb-3">
            UNE CUISINE LOCALE ET SAINE <br>

            <br>
            Nos partenaires restaurateurs sélectionnent chaque jour les meilleurs produits, dans le respect d’une
            agriculture durable et locale et en accord avec les saisons.

          </p>


        </div>

        <div class="cuisine row">

          <p class="col-sm-6 font-weight-bold py-5">
            UNE LIVRAISON RAPIDE ET DE QUALITÉ <br>

            <br> la livraison de vos plats est effectuée entre 30 et 45 minutes après commande, selon votre localisation
            et
            celle du restaurant partenaire.
            Les plats chauds sont livrés dans des caisses isothermes pour une meilleur conservation.
            Nos livraisons s’effectuent EXCLUSIVEMENT à vélo.

            Vous pouvez bénéficier de nos services 7j/7.

          </p>

          <div class="col-sm-6">
            <img class="mt-5" src="<?= get_template_directory_uri(); ?>/src/images/livraions-velo-00ok.jpg" alt="">
          </div>
        </div>

      </div>

    </section>




</main>





<?php // get_sidebar('lastposts') ?>

<?php get_footer(); ?>