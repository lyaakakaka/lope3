const message = `I don’t even know if you’ll ever read this.
But if you do… I just want to say goodluck on your exams.

Jangan tido lambat okay? Jangan main ml banyak sangat tauu. Try to focus on ur studyyy and try ur best to get straight A's !!.

I really hope you succeed in life and get everything that you've ever wished for and maybe one day u get the person u've always dreamed of too? Hahah.

Anyways, I hope you're doing okay, and I believe that u can do it!! Baca bismillah and don't forget to solat & doa.`;

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
