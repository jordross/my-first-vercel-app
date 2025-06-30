// Change background color randomly
function changeColor() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    
    // Update timestamp
    document.getElementById('timestamp').textContent = 
        `Last changed: ${new Date().toLocaleTimeString()}`;
}

// Set initial timestamp
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('timestamp').textContent = 
        `Loaded at: ${new Date().toLocaleTimeString()}`;
});
