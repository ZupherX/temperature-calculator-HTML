const temperatureTextBox = document.getElementById('temperatureTextBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temperature = 0;

function convert()
{
  if (toFahrenheit.checked)
  {
    temperature = Number(temperatureTextBox.value)
    temperature = (temperature * 9) / 5 + 32;
    result.textContent = `Temperature: ${temperature}`;
  }
  else if (toCelsius.checked)
  {
    temperature = Number(temperatureTextBox.value)
    temperature = (temperature - 32) * 5 / 9;
    result.textContent = `Temperature: ${temperature}`;
  }
  else
  {
    result.textContent = `Please select a measuring unit`;
  }
}
