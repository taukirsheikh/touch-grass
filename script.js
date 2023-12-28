

let count = 0;

function updateCounter() {
    document.getElementById("counter").textContent = count;
}

async function increaseCounter() {
    try{

        let image = document.getElementById("grassImage");
        const response = await fetch('https://source.unsplash.com/featured/?grass');
        const imageUrl = response.url;
        grassImage.src = imageUrl;
        

            var randomX = Math.floor(Math.random() * (window.innerWidth - image.offsetWidth));
            var randomY = Math.floor(Math.random() * (window.innerHeight - image.offsetHeight));
            // new position
            image.style.left = randomX + "px";
            image.style.top = randomY + "px";
            
            
            // console.log("Button clicked! New position: (" + randomX + ", " + randomY + ")");
            count++;
        
        updateCounter();
    } catch(err){
        console.error("Error fetching image: " ,err)
    }
}

