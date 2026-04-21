const message = `I don’t even know if you’ll ever read this.
But if you do… I just want to say goodluck on your life.

Hehe honestly letting u go is one of the hardest thing that i've ever had to do. Eventho ik that there will never be "us" anymore but just gonna let u know that im always here.

I really hope you succeed in life and get everything that you've ever wished for and maybe one day u get the person u've always dreamed of too? Hahah.

Anyways, please take a good care of urself and if u don't like me anym just say it, don't text me and pretend like u still love me`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");

    letterBox.style.display = "block";

    let i = 0;
    typedText.innerHTML = ""; // IMPORTANT: reset text

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      } else {
        setTimeout(() => {
          document.getElementById("letterBox").style.display = "none";
          document.getElementById("loveAnimation").style.display = "block";
        }, 1500);
      }
    }

    typeWriter();
  }, 600);
}
