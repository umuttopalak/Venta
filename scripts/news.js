const rssTable = document.getElementById("news");
console.log(rssTable)

// Fetch the RSS feed using Axios
axios.get('https://www.cnnturk.com/feed/rss/all/news')
    .then(response => {
        // Use DOMParser to parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');

        // Extract the RSS feed items
        const items = xmlDoc.getElementsByTagName('item');
        console.log(items)

        
        
        // Loop through the RSS feed items and create a row for each item
        for (let i = 0; i < items.length; i++){

            const div = document.createElement('div');
            const hr = document.createElement('hr')
            const image = document.createElement('img');
            const title = document.createElement('h1');
            const link = document.createElement('a')

            
            const br = document.createElement('br')
            
            div.setAttribute('class', 'new')
            image.setAttribute('class', 'image')
            hr.setAttribute('style', 'width:100% ;margin-top:5%;margin-bottom:8%')
            
            title.innerHTML = items[i].getElementsByTagName('title')[0].textContent
            image.src = items[i].getElementsByTagName('image')[0].textContent
            link.href = items[i].getElementsByTagName('link')[0].textContent

            link.appendChild(title)
            
            div.appendChild(image)
            div.appendChild(link)
            div.appendChild(hr)
            
            rssTable.appendChild(div)

        };

    })
    .catch(error => {
        console.log(error);
    });
