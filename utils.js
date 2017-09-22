let startTime;

let defaultChartsAmount = 1000;
function startChrono() {
  toastr.options.timeOut = 0;
  toastr.options.extendedTImeout  = 0;
  startTime = new Date().getTime();
}

function stopChrono(chartsAmmount, chartValuesAmmount) {
  const endingTime = new Date().getTime()
  var chronoMessage = `It took ${(endingTime - startTime) / 1000}
    seconds to draw ${chartsAmmount} charts with ${chartValuesAmmount} values each`;
  toastr.info(chronoMessage)
  console.log(chronoMessage);
}

function generateHtmlElements(elementAmmount, hasSvg) {
  for (var i = 1; i <= elementAmmount; i++) {
    var newElement = document.createElement('div');
    if (hasSvg) {
      var newSvgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      newElement.append(newSvgElement);
    }
    newElement.setAttribute('id', 'chart' + i);
    newElement.setAttribute('class', 'chart-element');
    document.body.appendChild(newElement);
  }
}