`strict mode`
class CityToCoordinates {
    static async geocode(city){
        const tooltip = document.querySelector(`.tooltip-error`);
        const openCageAPIKey = `2bf1f57a834b406aaf4246f1b53a2a0e`;
        const openCageURL = `https://api.opencagedata.com/geocode/v1/json`;
        
        const response = await fetch(`${openCageURL}?q=${city}&key=${openCageAPIKey}&limit=1`);
        if (response.status === 200){
            const data = await response.json();
            tooltip.style.display = `none`;

            if (data.results.length > 0){
                return data.results[0].geometry;
            }
        };
        
        tooltip.style.display = `block`;
    }
}