let print_text = document.querySelector('.print_text')
let product_design_img = document.querySelector('.product_design_img')
let img1 = document.querySelector('.img1')
let product_design_text = document.querySelector('.product_design_text')
let web_design_img = document.querySelector('.web_design_img')
let web_design_text = document.querySelector('.web_design_text')
let illustration_img = document.querySelector('.illustration_img')
let illus_text = document.querySelector('.illus_text')
let mobile_img = document.querySelector('.mobile_img')
let mobile_text = document.querySelector('.mobile_text')
let animation_img = document.querySelector('.animation_img')
let animation_3d_text = document.querySelector('.animation_3d_text')
let brand_img = document.querySelector('.brand_img')
let brand_text = document.querySelector('.brand_text')

let animation_count = 0
product_design_img.onmouseenter = function(){
    animation_count++
   if (animation_count % 2 != 0){
   document.querySelector('.img1').classList.add('paused_animation')
   document.querySelector('.product_design_img').classList.add('paused_animation')
   print_text.classList.add('paused_animation')
   product_design_text.classList.add('paused_animation')
   web_design_img.classList.add('paused_animation')
   web_design_text.classList.add('paused_animation')
   illustration_img.classList.add('paused_animation')
   illus_text.classList.add('paused_animation')
   mobile_img.classList.add('paused_animation')
   mobile_text.classList.add('paused_animation')
   animation_img.classList.add('paused_animation')
   animation_3d_text.classList.add('paused_animation')
   brand_img.classList.add('paused_animation')
   brand_text.classList.add('paused_animation')
    
   }
   else{
      document.querySelector('.img1').classList.remove('paused_animation')
   document.querySelector('.product_design_img').classList.remove('paused_animation')
   print_text.classList.remove('paused_animation')
   product_design_text.classList.remove('paused_animation')
   web_design_img.classList.remove('paused_animation')
   web_design_text.classList.remove('paused_animation')
   illustration_img.classList.remove('paused_animation')
   illus_text.classList.remove('paused_animation')
   mobile_img.classList.remove('paused_animation')
   mobile_text.classList.remove('paused_animation')
   animation_img.classList.remove('paused_animation')
   animation_3d_text.classList.remove('paused_animation')
   brand_img.classList.remove('paused_animation')
   brand_text.classList.remove('paused_animation')

   }
}

img1.onmouseenter = function (){
    animation_count++
    console.log(555);
    if (animation_count % 2 != 0){
        document.querySelector('.img1').classList.add('paused_animation')
        document.querySelector('.product_design_img').classList.add('paused_animation')
        print_text.classList.add('paused_animation')
        product_design_text.classList.add('paused_animation')
        web_design_img.classList.add('paused_animation')
        web_design_text.classList.add('paused_animation')
        illustration_img.classList.add('paused_animation')
        illus_text.classList.add('paused_animation')
        mobile_img.classList.add('paused_animation')
        mobile_text.classList.add('paused_animation')
        animation_img.classList.add('paused_animation')
        animation_3d_text.classList.add('paused_animation')
        brand_img.classList.add('paused_animation')
        brand_text.classList.add('paused_animation')

        }
    else{
        document.querySelector('.img1').classList.remove('paused_animation')
        document.querySelector('.product_design_img').classList.remove('paused_animation')
        print_text.classList.remove('paused_animation')
        product_design_text.classList.remove('paused_animation')
        web_design_img.classList.remove('paused_animation')
        web_design_text.classList.remove('paused_animation')
        illustration_img.classList.remove('paused_animation')
        illus_text.classList.remove('paused_animation')
        mobile_img.classList.remove('paused_animation')
        mobile_text.classList.remove('paused_animation')
        animation_img.classList.remove('paused_animation')
        animation_3d_text.classList.remove('paused_animation')
        brand_img.classList.remove('paused_animation')
        brand_text.classList.remove('paused_animation')

     
        }
}

web_design_img.onmouseenter = function (){
    animation_count++
    if (animation_count % 2 != 0){
        document.querySelector('.img1').classList.add('paused_animation')
        document.querySelector('.product_design_img').classList.add('paused_animation')
        print_text.classList.add('paused_animation')
        product_design_text.classList.add('paused_animation')
        web_design_img.classList.add('paused_animation')
        web_design_text.classList.add('paused_animation')
        illustration_img.classList.add('paused_animation')
        illus_text.classList.add('paused_animation')
        mobile_img.classList.add('paused_animation')
        mobile_text.classList.add('paused_animation')
        animation_img.classList.add('paused_animation')
        animation_3d_text.classList.add('paused_animation')
        brand_img.classList.add('paused_animation')
        brand_text.classList.add('paused_animation')

        }
    else{
        document.querySelector('.img1').classList.remove('paused_animation')
        document.querySelector('.product_design_img').classList.remove('paused_animation')
        print_text.classList.remove('paused_animation')
        product_design_text.classList.remove('paused_animation')
        web_design_img.classList.remove('paused_animation')
        web_design_text.classList.remove('paused_animation')
        illustration_img.classList.remove('paused_animation')
        illus_text.classList.remove('paused_animation')
        mobile_img.classList.remove('paused_animation')
        mobile_text.classList.remove('paused_animation')
        animation_img.classList.remove('paused_animation')
        animation_3d_text.classList.remove('paused_animation')
        brand_img.classList.remove('paused_animation')
        brand_text.classList.remove('paused_animation')

     
        }
}

illustration_img.onmouseenter = function (){
    animation_count++
    if (animation_count % 2 != 0){
        document.querySelector('.img1').classList.add('paused_animation')
        document.querySelector('.product_design_img').classList.add('paused_animation')
        print_text.classList.add('paused_animation')
        product_design_text.classList.add('paused_animation')
        web_design_img.classList.add('paused_animation')
        web_design_text.classList.add('paused_animation')
        illustration_img.classList.add('paused_animation')
        illus_text.classList.add('paused_animation')
        mobile_img.classList.add('paused_animation')
        mobile_text.classList.add('paused_animation')
        animation_img.classList.add('paused_animation')
        animation_3d_text.classList.add('paused_animation')
        brand_img.classList.add('paused_animation')
        brand_text.classList.add('paused_animation')

        }
    else{
        document.querySelector('.img1').classList.remove('paused_animation')
        document.querySelector('.product_design_img').classList.remove('paused_animation')
        print_text.classList.remove('paused_animation')
        product_design_text.classList.remove('paused_animation')
        web_design_img.classList.remove('paused_animation')
        web_design_text.classList.remove('paused_animation')
        illustration_img.classList.remove('paused_animation')
        illus_text.classList.remove('paused_animation')
        mobile_img.classList.remove('paused_animation')
        mobile_text.classList.remove('paused_animation')
        animation_img.classList.remove('paused_animation')
        animation_3d_text.classList.remove('paused_animation')
        brand_img.classList.remove('paused_animation')
        brand_text.classList.remove('paused_animation')

     
        }
}

mobile_img.onmouseenter = function (){
    animation_count++
    if (animation_count % 2 != 0){
        document.querySelector('.img1').classList.add('paused_animation')
        document.querySelector('.product_design_img').classList.add('paused_animation')
        print_text.classList.add('paused_animation')
        product_design_text.classList.add('paused_animation')
        web_design_img.classList.add('paused_animation')
        web_design_text.classList.add('paused_animation')
        illustration_img.classList.add('paused_animation')
        illus_text.classList.add('paused_animation')
        mobile_img.classList.add('paused_animation')
        mobile_text.classList.add('paused_animation')
        animation_img.classList.add('paused_animation')
        animation_3d_text.classList.add('paused_animation')
        brand_img.classList.add('paused_animation')
        brand_text.classList.add('paused_animation')

        }
    else{
        document.querySelector('.img1').classList.remove('paused_animation')
        document.querySelector('.product_design_img').classList.remove('paused_animation')
        print_text.classList.remove('paused_animation')
        product_design_text.classList.remove('paused_animation')
        web_design_img.classList.remove('paused_animation')
        web_design_text.classList.remove('paused_animation')
        illustration_img.classList.remove('paused_animation')
        illus_text.classList.remove('paused_animation')
        mobile_img.classList.remove('paused_animation')
        mobile_text.classList.remove('paused_animation')
        animation_img.classList.remove('paused_animation')
        animation_3d_text.classList.remove('paused_animation')
        brand_img.classList.remove('paused_animation')
        brand_text.classList.remove('paused_animation')

     
        }
}

animation_img.onmouseenter = function (){
    animation_count++
    if (animation_count % 2 != 0){
        document.querySelector('.img1').classList.add('paused_animation')
        document.querySelector('.product_design_img').classList.add('paused_animation')
        print_text.classList.add('paused_animation')
        product_design_text.classList.add('paused_animation')
        web_design_img.classList.add('paused_animation')
        web_design_text.classList.add('paused_animation')
        illustration_img.classList.add('paused_animation')
        illus_text.classList.add('paused_animation')
        mobile_img.classList.add('paused_animation')
        mobile_text.classList.add('paused_animation')
        animation_img.classList.add('paused_animation')
        animation_3d_text.classList.add('paused_animation')
        brand_img.classList.add('paused_animation')
        brand_text.classList.add('paused_animation')

        }
    else{
        document.querySelector('.img1').classList.remove('paused_animation')
        document.querySelector('.product_design_img').classList.remove('paused_animation')
        print_text.classList.remove('paused_animation')
        product_design_text.classList.remove('paused_animation')
        web_design_img.classList.remove('paused_animation')
        web_design_text.classList.remove('paused_animation')
        illustration_img.classList.remove('paused_animation')
        illus_text.classList.remove('paused_animation')
        mobile_img.classList.remove('paused_animation')
        mobile_text.classList.remove('paused_animation')
        animation_img.classList.remove('paused_animation')
        animation_3d_text.classList.remove('paused_animation')
        brand_img.classList.remove('paused_animation')
        brand_text.classList.remove('paused_animation')

     
        }
}

brand_img.onmouseenter = function (){
    animation_count++
    if (animation_count % 2 != 0){
        document.querySelector('.img1').classList.add('paused_animation')
        document.querySelector('.product_design_img').classList.add('paused_animation')
        print_text.classList.add('paused_animation')
        product_design_text.classList.add('paused_animation')
        web_design_img.classList.add('paused_animation')
        web_design_text.classList.add('paused_animation')
        illustration_img.classList.add('paused_animation')
        illus_text.classList.add('paused_animation')
        mobile_img.classList.add('paused_animation')
        mobile_text.classList.add('paused_animation')
        animation_img.classList.add('paused_animation')
        animation_3d_text.classList.add('paused_animation')
        brand_img.classList.add('paused_animation')
        brand_text.classList.add('paused_animation')

        }
    else{
        document.querySelector('.img1').classList.remove('paused_animation')
        document.querySelector('.product_design_img').classList.remove('paused_animation')
        print_text.classList.remove('paused_animation')
        product_design_text.classList.remove('paused_animation')
        web_design_img.classList.remove('paused_animation')
        web_design_text.classList.remove('paused_animation')
        illustration_img.classList.remove('paused_animation')
        illus_text.classList.remove('paused_animation')
        mobile_img.classList.remove('paused_animation')
        mobile_text.classList.remove('paused_animation')
        animation_img.classList.remove('paused_animation')
        animation_3d_text.classList.remove('paused_animation')
        brand_img.classList.remove('paused_animation')
        brand_text.classList.remove('paused_animation')

     
        }
}



