// const's declare some variables!!

const introColor = 'hsl(83, 15%, 50%)';
const empathizeColor = 'hsl(17, 48%, 50%)';
const defineColor = 'hsl(210, 10%, 50%)';
const ideateColor = 'hsl(40, 49%, 50%)';
const prototypeColor = 'hsl(185, 21%, 50%)';
const conclusionColor = 'hsl(51, 15%, 50%)';


// the main function to change header background color
const scrollHandler = () => {

  const header = document.getElementById('header')
  const intro = document.getElementById('intro')
  const empathize = document.getElementById('empathize')

  let headerPosition = window.pageYOffset + header.offsetHeight
  let introPosition = intro.offsetTop - headerPosition;
  let empathizePosition = empathize.offsetTop - headerPosition;
  let definePosition = define.offsetTop - headerPosition;
  let ideatePosition = ideate.offsetTop - headerPosition;
  let prototypePosition = prototype.offsetTop - headerPosition;
  let conclusionPosition = conclusion.offsetTop - headerPosition;

  if (introPosition < 60 && introPosition > 0) {
    console.log(introPosition)
    header.style.backgroundColor = introColor
  } else if (empathizePosition < 60 && empathizePosition > 0 ) {
    header.style.backgroundColor = empathizeColor
  } else if (definePosition < 60 && definePosition > 0) {
    header.style.backgroundColor = defineColor ;
  } else if (ideatePosition < 60 && ideatePosition > 0) {
    header.style.backgroundColor = ideateColor ;
  } else if (prototypePosition < 60 && prototypePosition > 0) {
    header.style.backgroundColor = prototypeColor;
  } else if (conclusionPosition < 60 && conclusionPosition > 0) {
    header.style.backgroundColor = conclusionColor;
  }
}

window.addEventListener('scroll', scrollHandler)

