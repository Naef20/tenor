document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchQuery').value;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.tenor.com/v1/search?q=${query}&key=${apiKey}&limit=8`;
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonResponse = JSON.parse(xhr.responseText);
        displayResults(jsonResponse);
      }
    };
    xhr.send();
  });
  
  function displayResults(response) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    response.results.forEach(result => {
      const img = document.createElement('img');
      img.src = result.media[0].gif.url;
      resultsDiv.appendChild(img);
    });
  }
  