const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Hero subtitle
html = html.replace(
  'Instalamos gratuitamente geladeiras inteligentes e minimercados autônomos. Operação completa, reposição automatizada e experiência premium para seus usuários.',
  'Levamos geladeiras inteligentes e prateleiras para minimercados autônomos até o seu espaço. Nós operamos, abastecemos e garantimos a conveniência 24h, sem custo de implantação para o seu condomínio ou empresa.'
);

// 2. Pagamento Simplificado (replaces Relatórios e Analytics)
html = html.replace(
  '<h3>Relatórios e Analytics</h3>',
  '<h3>Pagamento Simplificado</h3>'
);
html = html.replace(
  '<p>Acompanhe o desempenho, preferências de consumo e repasses financeiros com transparência.</p>',
  '<p>Sistema intuitivo para pagamentos rápidos via PIX, Cartão de Crédito e Débito. Comprou, pagou, levou.</p>'
);

// 3. Segurança Total (update text)
html = html.replace(
  '<p>Câmeras integradas e visão computacional auditablem todas as compras com precisão.</p>',
  '<p>Segurança total com câmeras de monitoramento integradas, garantindo uma operação tranquila e segura para todos.</p>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Modifications completed.');
