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
get_header();
?>
<div class="bg-warning">
<main class="container">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

  <div class="row justify-content-md-center my-auto">

    <div class="col">
    <h1 class="my-4"><?php the_title () ; ?></h1>
    <?php the_post_thumbnail() ; ?>
    <?php the_content () ; ?>
    <?php the_field("adresse") ; ?>

    <?php $specificites = get_the_terms( get_the_ID(), 'specificite' ); ?>
    </div>


    <?php if( have_rows('plat') ): ?>
      <ul class="col slides my-4">
        <?php while( have_rows('plat') ): the_row(); 
          // vars
          $titre = get_sub_field('titre');
          $description = get_sub_field('description');
          $prix = get_sub_field('prix'); 
          $specificites = get_sub_field('specificites');
          ?>
          <li class="slide mx-4">
              <h2><?php echo $titre; ?></h2>
              <?php echo $description; ?>
              <?php echo $prix; ?> €

              <?php if ($specificites) : ?>
                <ul>
                  <?php foreach ($specificites as $specificite) : ?>
                    <li><?= $specificite->name; ?></li>
                  <?php endforeach; ?>
                </ul>
                  <?php endif; ?>
          </li>
        <?php endwhile; ?>
      </ul>
    <?php endif; ?>


  <?php endwhile; ?>
  <?php else : ?>
    <?php get_template_part( 'template-parts/content', 'none' ); ?>
    
  <?php endif; ?>
  
  <div class="col">
  <?php comments_template(); ?>
  </div>

  </div>

</main>
</div>


<?php get_footer() ?>
