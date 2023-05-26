let pupil = function(selector) {
  let eye = document.querySelector(selector),
    pupil = eye.querySelector(`.pupil`),
    eye_area = eye.getBoundingClientRect();

  let eyeMove = function(mouseX, mouseY) {
    let radian = Math.atan2(mouseY - (eye_area.y + eye_area.height * 0.5), mouseX - (eye_area.x + eye_area.width * 0.5)); //라디안 형식
    pupil.style.transform = 'rotate(' + (180 * radian / Math.PI - 90) + 'deg)';
  };

  return {
    eyeMove : eyeMove
  };
};

let eye_1 = pupil(`.eye-1`);
let eye_2 = pupil(`.eye-2`);

window.addEventListener(`mousemove`, function(e) {
  eye_1.eyeMove(e.pageX, e.pageY);
  eye_2.eyeMove(e.pageX, e.pageY);
})
