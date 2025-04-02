// Game Data Collection
const gameLibrary = [
    // Classic Games
    {
        name: 'Cut The Rope',
        category: 'classic-games',
        thumbnail: '/assets/thumbnails/cut-the-rope.jpg',
        link: '/games/cut-the-rope.html'
    },
    {
        name: 'Om Nom Connect Classic',
        category: 'classic-games',
        thumbnail: '/assets/thumbnails/om-nom-connect.jpg',
        link: '/games/om-nom-connect.html'
    },

    // Puzzle Games
    {
        name: 'Brain Trainer',
        category: 'puzzle-games',
        thumbnail: '/assets/thumbnails/brain-trainer.jpg',
        link: '/games/brain-trainer.html'
    },
    {
        name: 'Braindom',
        category: 'puzzle-games',
        thumbnail: '/assets/thumbnails/braindom.jpg',
        link: '/games/braindom.html'
    },

    // Racing Games
    {
        name: 'Racing Cars',
        category: 'racing-games',
        thumbnail: '/assets/thumbnails/racing-cars.jpg',
        link: '/games/racing-cars.html'
    },
    {
        name: 'Street Race Fury',
        category: 'racing-games',
        thumbnail: '/assets/thumbnails/street-race-fury.jpg',
        link: '/games/street-race-fury.html'
    },

    // Creative Games
    {
        name: 'Mandala Coloring Book',
        category: 'creative-games',
        thumbnail: '/assets/thumbnails/mandala-coloring.jpg',
        link: '/games/mandala-coloring.html'
    },
    {
        name: 'Kawaii Chibi Creator',
        category: 'creative-games',
        thumbnail: '/assets/thumbnails/kawaii-chibi.jpg',
        link: '/games/kawaii-chibi.html'
    }
];

/**
 * Render games for a specific category
 * @param {string} containerId - ID of the container to render games in
 * @param {string} category - Category of games to render
 */
function displayCategoryGames(containerId, category) {
    const categoryContainer = document.getElementById(containerId);
    if (!categoryContainer) return;

    const filteredGames = gameLibrary.filter(game => game.category === category);
    
    categoryContainer.innerHTML = filteredGames.map(game => `
        <div class="game-card">
            <img src="${game.thumbnail}" alt="${game.name} game thumbnail">
            <h3>${game.name}</h3>
            <a href="${game.link}" aria-label="Play ${game.name}"></a>
        </div>
    `).join('');
}

/**
 * Search games based on user input
 */
function searchGames() {
    const searchInput = document.getElementById('game-search');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Find games matching the search term
    const matchedGames = gameLibrary.filter(game => 
        game.name.toLowerCase().includes(searchTerm)
    );

    // Clear existing game grids
    const categoryContainers = document.querySelectorAll('.game-grid');
    categoryContainers.forEach(container => {
        container.innerHTML = '';
    });

    // Display matched games in their respective categories
    matchedGames.forEach(game => {
        const categoryContainer = document.getElementById(game.category);
        if (categoryContainer) {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.name} game thumbnail">
                <h3>${game.name}</h3>
                <a href="${game.link}" aria-label="Play ${game.name}"></a>
            `;
            categoryContainer.appendChild(gameCard);
        }
    });
}

// Initialize page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render games for each category
    displayCategoryGames('classic-games', 'classic-games');
    displayCategoryGames('puzzle-games', 'puzzle-games');
    displayCategoryGames('racing-games', 'racing-games');
    displayCategoryGames('creative-games', 'creative-games');

    // Add search functionality
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        // Trigger search on Enter key press
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                searchGames();
            }
        });
    }

    // Highlight active navigation link
    const currentPath = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
