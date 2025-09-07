// Dados das histórias (simulando um banco de dados)
let stories = [
    {
        author: "Maria S.",
        date: "29 de agosto, 2025",
        category: "Conquistas",
        title: "Primeira vez no cinema",
        content: "Hoje meu filho de 8 anos foi ao cinema pela primeira vez! Preparamos durante semanas, assistindo vídeos sobre como é o cinema, praticando ficar sentado no escuro. Ele levou seus fones de proteção auditiva e conseguiu assistir quase todo o filme. Foi emocionante ver o sorriso dele quando as luzes se acenderam.",
        tags: ["Cinema", "Preparação", "Conquista"]
    },
    {
        author: "João P.",
        date: "28 de agosto, 2025",
        category: "Trabalho",
        title: "Adaptações no trabalho que mudaram tudo",
        content: "Depois de conversar com meu supervisor sobre minhas necessidades, consegui algumas adaptações simples: uma mesa em local mais reservado e permissão para usar fones durante tarefas que exigem concentração. A produtividade aumentou muito e me sinto mais confortável no ambiente de trabalho.",
        tags: ["Adaptações", "Produtividade", "Autoadvocacia"]
    }
];

// Função para adicionar nova história
document.getElementById('storyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const author = document.getElementById('authorName').value || 'Anônimo';
    const category = document.getElementById('storyCategory').value;
    const title = document.getElementById('storyTitle').value;
    const content = document.getElementById('storyContent').value;

    if (!category || !title || !content) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const newStory = {
        author: author,
        date: new Date().toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        category: getCategoryName(category),
        title: title,
        content: content,
        tags: generateTags(content, category)
    };

    // Adiciona a nova história no início da lista
    stories.unshift(newStory);

    // Recarrega as histórias
    displayStories();

    // Limpa o formulário
    document.getElementById('storyForm').reset();

    // Feedback visual
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Relato compartilhado!';
    submitBtn.style.background = '#90EE90';

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 2000);
});

// Função para obter nome da categoria
function getCategoryName(category) {
    const categories = {
        'diagnostico': 'Diagnóstico',
        'escola': 'Escola',
        'familia': 'Família',
        'trabalho': 'Trabalho',
        'terapias': 'Terapias',
        'conquistas': 'Conquistas',
        'desafios': 'Desafios',
        'sensorial': 'Sensorial',
        'social': 'Social',
        'outros': 'Outros'
    };
    return categories[category] || 'Outros';
}

// Função para gerar tags automaticamente
function generateTags(content, category) {
    const tags = [];
    const words = content.toLowerCase();

    // Tags baseadas no conteúdo
    if (words.includes('escola') || words.includes('professor')) tags.push('Escola');
    if (words.includes('família') || words.includes('pai') || words.includes('mãe')) tags.push('Família');
    if (words.includes('terapia') || words.includes('terapeuta')) tags.push('Terapia');
    if (words.includes('diagnóstico')) tags.push('Diagnóstico');
    if (words.includes('conquista') || words.includes('conseguiu')) tags.push('Conquista');
    if (words.includes('sensorial') || words.includes('barulho') || words.includes('som')) tags.push('Sensorial');
    if (words.includes('ansiedade') || words.includes('ansioso')) tags.push('Ansiedade');
    if (words.includes('amigo') || words.includes('social')) tags.push('Social');

    // Adiciona tag da categoria se não estiver nas tags
    const categoryTag = getCategoryName(category);
    if (!tags.includes(categoryTag)) tags.push(categoryTag);

    return tags.slice(0, 3); // Máximo 3 tags
}

// Função para exibir histórias
function displayStories() {
    const container = document.getElementById('storiesContainer');
    container.innerHTML = '';

    stories.forEach(story => {
        const storyHTML = `
                    <div class="story-card">
                        <div class="story-header">
                            <span class="story-author">${story.author}</span>
                            <span class="story-date">${story.date}</span>
                        </div>
                        <span class="story-category">${story.category}</span>
                        <h3 class="story-title">${story.title}</h3>
                        <p class="story-content">${story.content}</p>
                        <div class="story-tags">
                            ${story.tags.map(tag => `<span class="story-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
        container.innerHTML += storyHTML;
    });

    // Adiciona botão "Carregar mais" se necessário
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (stories.length > 4) {
        if (!loadMoreBtn) {
            container.innerHTML += '<button class="load-more-btn" onclick="loadMoreStories()">Carregar mais relatos</button>';
        }
    }
}

// Função para carregar mais histórias (simulada)
function loadMoreStories() {
    const moreStories = [
        {
            author: "Carla T.",
            date: "25 de agosto, 2025",
            category: "Família",
            title: "Irmãos aprendendo juntos sobre autismo",
            content: "Explicar o autismo para o irmão mais novo foi um desafio, mas criamos um 'manual de instruções' divertido sobre como o cérebro funciona diferente. Agora eles brincam juntos respeitando as necessidades um do outro.",
            tags: ["Irmãos", "Explicação", "Família"]
        },
        {
            author: "Rafael D.",
            date: "24 de agosto, 2025",
            category: "Trabalho",
            title: "Revelando o diagnóstico para colegas",
            content: "Decidir contar sobre meu autismo no trabalho foi difícil, mas a reação foi melhor do que esperava. Meus colegas se tornaram mais compreensivos e até sugerem melhorias no ambiente que beneficiam a todos.",
            tags: ["Revelação", "Colegas", "Compreensão"]
        }
    ];

    stories.push(...moreStories);
    displayStories();
}

// Funcionalidade de busca
document.querySelector('.search-input').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const storyCards = document.querySelectorAll('.story-card');

    storyCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Inicialização
displayStories();