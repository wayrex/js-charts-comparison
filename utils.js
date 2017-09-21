var startTime;
function startChrono() {
  startTime = new Date().getTime();
}
function stopChrono(chartsAmmount, chartValuesAmmount) {
  const chronoMessage = `It took ${(new Date().getTime() - startTime) / 1000}
    seconds to draw {$chartsAmmount} charts with {chartValuesAmmount} values each`;
  console.log(chronoMessage);
}