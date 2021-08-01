import ZingTouch from 'zingtouch';

var currentAngle = 15;
document.getElementById('rotatable-menu-area').style.transform = 'rotate(15deg)';

var target = document.getElementById('interaction');
var region = new ZingTouch.Region(target);

region.bind(target, 'rotate', function(e) {
  var rotatable = document.getElementById('rotatable-menu-area');
  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

function setOutput(data) {
  var outputStr = "> ";
  for (var i = 0; i < data.length; i++) {
    outputStr += data[i][0] + ": " + data[i][1] + ((i === data.length - 1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
}