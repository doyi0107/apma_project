      const myslide = document.querySelectorAll(".myslider"),
        dot = document.querySelectorAll(".dot");

      console.log(dot);
  

      let counter = 1;
      slidefun(counter);

      let timer = setInterval(autoslide, 5000);

      function autoslide() {
        counter += 1;
        slidefun(counter);
      }

      function plusSliders(n) {
        counter += n;
        slidefun(counter);
        resetTimer();
      }

      function currentSlide(n) {
        counter = n;
        slidefun(counter);
        resetTimer();
      }

      function resetTimer(timer) {
        clearInterval(timer);
        timer = setInterval(autoslide, 5000);
      }

      function slidefun(n) {
        let i;
        for (i = 0; i < myslide.length; i++) {
          myslide[i].style.display = "none";
        }

        for (i = 0; i < dot.length; i++) {
          dot[i].classList.remove("active");
        }
        if (n > myslide.length) {
          counter = 1;
        }
        if (n < 1) {
          counter = myslide.length;
        }
        myslide[counter - 1].style.display = "block";
        dot[counter - 1].classList.add("active");
      }

      function mg() {
        let ulElement = document.querySelector("#box01>section>ul");
        let liElements = ulElement.querySelectorAll("li");
        let divWidth = ulElement.offsetWidth;

        console.log(divWidth);

        ulElement.insertBefore(
          liElements[liElements.length - 1],
          liElements[0]
        );

        ulElement.style.marginLeft = "-" + divWidth + "px";

        document
          .querySelector("#box01 .prev")
          .addEventListener("click", function (e) {
            animateSlider("+");
          });

        document
          .querySelector("#box01 .next")
          .addEventListener("click", function (e) {
            animateSlider("-");
          });

        function animateSlider(direction) {
          let currentMarginLeft = parseInt(ulElement.style.marginLeft, 10);
          let newMarginLeft;

          if (direction === "+") {
            newMarginLeft = currentMarginLeft + divWidth;
          } else {
            newMarginLeft = currentMarginLeft - divWidth;
          }

          ulElement.style.transition = "margin-left 1s ease-in-out";
          ulElement.style.marginLeft = newMarginLeft + "px";

          setTimeout(function () {
            ulElement.style.transition = "";
            if (direction === "+") {
              ulElement.insertBefore(
                liElements[liElements.length - 1],
                liElements[0]
              );
            } else {
              ulElement.appendChild(liElements[0]);
            }
            ulElement.style.marginLeft = "-" + divWidth + "px";
          }, 5000);
        }
      }





