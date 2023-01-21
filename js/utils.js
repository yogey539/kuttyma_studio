function select(el, all = false, scope = document) {
  el = el.trim();
  if (all) {
    return [...scope.querySelectorAll(el)];
  } else {
    return scope.querySelector(el);
  }
}

const addEvent = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

const getRandomAvatar = async () => {
  const url = "https://randomuser.me/api/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

const setImageSize = () => {
  const imgs = select("img", true);
  if (imgs) {
    imgs.forEach(function (img) {
      const height = img.height,
        width = img.width;
      img.setAttribute("width", width);
      img.setAttribute("height", height);
      img.setAttribute("srcSet", img.src);
      img.setAttribute("loading", "lazy");
    });
  }
};

document.addEventListener("DOMContentLoaded", setImageSize);
document.addEventListener("resize", setImageSize);

const getAllProduct = (target = "#products", total = 8) => {
  fetch("/data/products.json")
    .then((res) => res.json())
    .then(function (data) {
      const element = select(target, false);
      if (element) {
        if(total == -1){
          total = data.length
          console.log(total)
        }
        for (let i = 0; i < total; i++) {
          console.log(data[i].images[0])
          element.insertAdjacentHTML(
            "beforeend",
            `<div class="flex-col gap-4">
                <div class="thumbnail hover-scale-up">
                  <img
                    src="${data[i].thumbnail}"
                    class="front"
                    alt="${data[i].title}"
                    srcset="${data[i].thumbnail}"
                  />
                 
                  <button class="btn-wish text-xl" aria-label="Add Wishlist"></button>
                  <button class="btn-cart flex-row text-sm px-4 py-2">
                    Add to Cart
                  </button>
                </div>
                <div class="flex-col gap-2 px-2">
                  <div class="flex-row flex-wrap gap-x-2">
                    ${data[i].categories
                      .map(function (category) {
                        return `<a href="#" class="hover-underline">${category}</a>`;
                      })
                      .join("")}
                  </div>
                  <a href="/product/detail.html" class="-mt-1">
                    <h2 class="text-xl hover-text-primary hover-underline">${
                      data[i].title
                    }</h2>
                  </a>
                  <span class="font-medium">RS ${data[i].price} </span>
                </div>
              </div>`
          );
        }
      }
    })
    .then(setImageSize);
};


export { select, addEvent, getRandomAvatar, getAllProduct };

