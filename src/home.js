export function home() {
  const content = document.querySelector("#content");
  content.innerHTML = `
  <div>
      <!-- Text Section -->
          <div >
              <h1 class="max-w-xl text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                A Bowl of Love from <br><span >Nigerian Cuisine</span> <br>For You
              </h1>
              
              <p>
                Jollof rice is a beloved West African dish known for its vibrant red color and bold flavors. 
                It's a one-pot rice dish made with tomatoes, peppers, onions, and a blend of spices
              </p>
  
              <div>
                
              <button>
                  Order Now
                </button>

              </div>
            </div>
            
            <!-- Image Section -->
            
          </div>
  
  `;
}
