const viewMoreBtnEl = document.getElementById("view-more");
const mainGridEl = document.getElementById("main-grid");

viewMoreBtnEl.addEventListener("click", function () {
  mainGridEl.innerHTML += `
     <div class="blog-item blog1">
          <img src="images/blog-image1.png" />
          <p>JULY 23,2022</p>
          <h2>Blog one</h2>
          <p>
            I'm excited to start a new learning journey as a Scrimba Bootcamp
            student! After several months of learning in the Frontend Developer
            Career Path.
          </p>
        </div>
        <div class="blog-item blog2">
          <img src="images/blog-image2.png" />
          <p>JULY 23,2022</p>
          <h2>Blog two</h2>
          <p>
            I'm excited to start a new learning journey as a Scrimba Bootcamp
            student! After several months of learning in the Frontend Developer
            Career Path.
          </p>
        </div>
        <div class="blog-item blog3">
          <img src="images/blog-image3.png" />
          <p>JULY 23,2022</p>
          <h2>Blog three</h2>
          <p>
            I'm excited to start a new learning journey as a Scrimba Bootcamp
            student! After several months of learning in the Frontend Developer
            Career Path.
          </p>
        </div>
  `;

  viewMoreBtnEl.style.display = 'none'
});
