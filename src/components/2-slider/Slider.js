import "./slider.css";

function Slider(){
    return(
        <>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/e-commerce/960x0.jpg?format=jpg&width=960" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg?format=webp&quality=80&width=688" class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item">
      <img src="https://beirutin.com/wp-content/uploads/2022/06/EcommerceBusinessWhatIsIt.jpg" class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsz5A1uZR8obqFZmC5i5QAk5_gxDuKuk4i5YspSjTvfnEU3BfEni8GvpHsfnAx2K3BBY&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>



  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
    )
}

export default Slider;