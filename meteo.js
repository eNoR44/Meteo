$(document).ready(function() {
    function getWeatherData() {
      $.getJSON('conf.json', function(data) {
        var cityName = data.city;
  
        var apiKey = "d00a9f8c913e0a686b7b522bc55d093b";
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + apiKey;
  
        $.ajax({
          url: apiUrl,
          method: 'GET',
          dataType: 'json',
          success: function(response) {
            var weatherData = response.weather[0];
            var temperature = response.main.temp;
  
            var weatherHtml = '<h2>' + cityName + '</h2>';
            weatherHtml += '<p><strong>Weather:</strong> ' + weatherData.main + '</p>';
            weatherHtml += '<p><strong>Description:</strong> ' + weatherData.description + '</p>';
            weatherHtml += '<p><strong>Temperature:</strong> ' + temperature + ' K</p>';
  
            $('#weather').html(weatherHtml);
          },
          error: function(error) {
            console.log('Error:', error);
            $('#weather').html('<p>Error retrieving weather data.</p>');
          }
        });
      });
    }
  
    
    setInterval(getWeatherData, 3600000);
  });
