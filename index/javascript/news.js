// Search functionality
        document.querySelector('.search-box').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const articles = document.querySelectorAll('.article-card');
            
            articles.forEach(article => {
                const title = article.querySelector('.article-title').textContent.toLowerCase();
                const abstract = article.querySelector('.article-abstract').textContent.toLowerCase();
                const authors = article.querySelector('.article-authors').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || abstract.includes(searchTerm) || authors.includes(searchTerm)) {
                    article.style.display = 'block';
                    article.style.opacity = '1';
                } else {
                    article.style.opacity = searchTerm ? '0.3' : '1';
                }
            });
        });
        
        // Tag filtering
        document.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('click', function() {
                const tagText = this.textContent.toLowerCase();
                const articles = document.querySelectorAll('.article-card');
                
                // Reset all articles
                articles.forEach(article => {
                    article.style.display = 'block';
                    article.style.opacity = '0.3';
                });
                
                // Highlight articles with matching tags
                articles.forEach(article => {
                    const tags = Array.from(article.querySelectorAll('.tag'));
                    const hasMatchingTag = tags.some(t => t.textContent.toLowerCase() === tagText);
                    
                    if (hasMatchingTag) {
                        article.style.opacity = '1';
                    }
                });
                
                // Reset after 3 seconds
                setTimeout(() => {
                    articles.forEach(article => {
                        article.style.opacity = '1';
                    });
                }, 3000);
            });
        });
        
        // Navigation menu
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                
                this.classList.add('active');
                
            });
        });
        
        // Newsletter subscription
        document.querySelector('.newsletter-btn').addEventListener('click', function() {
            const email = document.querySelector('.newsletter-input').value;
            if (email && email.includes('@')) {
                alert('Obrigado por se inscrever! Você receberá nossas atualizações em breve.');
                document.querySelector('.newsletter-input').value = '';
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
        
        // Article title click effect
        document.querySelectorAll('.article-title').forEach(title => {
            title.addEventListener('click', function() {
                // Simulate opening article
                this.style.color = '#8b7355';
                setTimeout(() => {
                    this.style.color = '#6b5a45';
                }, 200);
            });
        });