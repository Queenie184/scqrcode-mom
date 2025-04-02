// Game Library with Mario-inspired categorization
const gameLibrary = [
    // Classic Games
    {
        name: 'Pipe Puzzle',
        category: 'classic',
        thumbnail: '/assets/games/pipe-puzzle.jpg',
        description: 'Navigate through classic Mario-style pipes!'
    },
    {
        name: 'Coin Collector',
        category: 'classic',
        thumbnail: '/assets/games/coin-collector.jpg',
        description: 'Grab those golden coins like a true hero!'
    },

    // Puzzle Games
    {
        name: 'Block Breaker',
        category: 'puzzle',
        thumbnail: '/assets/games/block-breaker.jpg',
        description: 'Break blocks and solve challenging puzzles!'
    },
    {
        name: 'Castle Challenge',
        category: 'puzzle',
        thumbnail: '/assets/games/castle-challenge.jpg',
        description: 'Solve puzzles to rescue the princess!'
    },

    // Racing Games
    {
        name: 'Kart Rush',
        category: 'racing',
        thumbnail: '/assets/games/kart-rush.jpg',
        description: 'Race through exciting Mario Kart-inspired tracks!'
    },
    {
        name: 'Speed Mushroom',
        category: 'racing',
        thumbnail: '/assets/games/speed-mushroom.jpg',
        description: 'Boost your way to victory!'
    },

    // Creative Games
    {
        name: 'World Builder',
        category: 'creative',
        thumbnail: '/assets/games/world-builder.jpg',
        description: 'Create your own magical game world!'
    },
    {
        name: 'Character Maker',
        category: 'creative',
        thumbnail: '/assets/games/character-maker.jpg',
        description: 'Design your own game character!'
    }
];

/**
 * Render games for a specific category
 * @param {string} categoryId - ID of the category container
 * @param {string} category - Category to filter games
 */
function renderCategoryGames(categoryId, category) {
    const container = document.getElementById(categoryId);
    if (!container) return;

    const categoryGames = gameLibrary.filter(game => game.category === category);
    
    container.innerHTML = categoryGames.map(game => `
        <div class="game-card" onclick="playGame('${game.name}')">
            <img src="${game.thumbnail}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Search games based on user input
 */
function searchGames() {
    const searchInput = document.getElementById('game-search');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Clear previous game grids
    const gameGrids = document.querySelectorAll('.game-grid');
    gameGrids.forEach(grid => grid.innerHTML = '');

    // Find and display matching games
    const matchedGames = gameLibrary.filter(game => 
        game.name.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm)
    );

    // Group matched games by category
    const categorizedMatches = matchedGames.reduce((acc, game) => {
        if (!acc[game.category]) acc[game.category] = [];
        acc[game.category].push(game);
        return acc;
    }, {});

    // Render matched games
    Object.keys(categorizedMatches).forEach(category => {
        const container = document.querySelector(`#${category} .game-grid`);
        if (container) {
            container.innerHTML = categorizedMatches[category].map(game => `
                <div class="game-card" onclick="playGame('${game.name}')">
                    <img src="${game.thumbnail}" alt="${game.name}">
                    <div class="game-info">
                        <h3>${game.name}</h3>
                        <p>${game.description}</p>
                    </div>
                </div>
            `).join('');
        }
    });
}

/**
 * Play a
