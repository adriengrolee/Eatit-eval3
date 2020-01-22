<?php
/**
 * The Footer for our theme.
 *
 * ...
 *
 * @package startheme
 *
 */
?>

<footer class="main-footer bg-secondary">

<div class="container">

  <div class="row footer py-5">

    <div class="logo-footer col-sm-6 col-md-4">
    <?php dynamic_sidebar('footer-sidebar-1') ?>
      <!-- <a class="" href="#">
        <img class="pr-5" src="./images/Logo_EAT-IT-footer.png" alt="">
      </a> -->
    </div>

    <div class="text-footer col-sm-6 col-md-4 py-5">
    <?php dynamic_sidebar('footer-sidebar-2') ?>
      <a href="#" class="text-decoration-none text-white m-3">
        <h3>A propos de Eat-it</h3>
      </a>

      <a href="#" class="text-decoration-none text-white m-3">
        <h3>FAQ</h3>
      </a>

      <a href="#" class="text-decoration-none text-white m-3">
        <h3>Devenir restaurant partenaire</h3>
      </a>

      <a href="#" class="text-decoration-none text-white m-3">
        <h3>Nous contacter</h3>
      </a>

    </div>


  <div class="social-footer d-flex flex-wrap justify-content-center mt-3 col-sm-6 col-md-4 ">
    <?php dynamic_sidebar('footer-sidebar-3') ?>
      <a class="ml-5 px-5" href="#">
        <img class="py-5" src="<?= get_template_directory_uri(); ?>/src/images/logo-fb-footer.png" alt="">
      </a>
      <a class="ml-5 px-5" href="#">
        <img class="py-5" src="<?= get_template_directory_uri(); ?>/src/images/logo-tw-footer.png" alt="">
      </a>
      <a class="ml-5 px-5" href="#">
        <img class="py-5" src="<?= get_template_directory_uri(); ?>/src/images/logo-ig-footer.png" alt="">
      </a>

    </div>

    <h3 class="m-auto text-white">Copyright Adrien Grolee - 2020</h3>

  </div>



</div>





</footer>



  

<?php wp_footer(); ?>

</body>
</html>