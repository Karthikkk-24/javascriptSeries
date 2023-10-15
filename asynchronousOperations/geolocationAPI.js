// Geolocation API 

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    });
} else {
    console.log('Geolocation is not supported by your browser');
}