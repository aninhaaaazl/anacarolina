let inventario = [
    { nome: 'blusa feminina', preco: 69,99, emEstoque: true },
    { nome: 'calça moletom feminina', preco: 90,99, emEstoque: true },
    { nome: 'moletom feminino', preco: 199,90, emEstoque: true },
    { nome: 'vestido longo', preco: 214,00, emEstoque: false },
    { nome: 'conjunto feminino estampado', preco: 160,00, emEstoque: true },
    { nome: 'shorts jeans', preco: 99,00, emEstoque: true },
    { nome: 'shorts alfaiataria', preco: 89,90, emEstoque: true },
    { nome: 'calça jeans feminina', preco: 179,99, emEstoque: true },
    { nome: 'body feminino suplex', preco: 45,00, emEstoque: true },
    { nome: 'blazer faminino', preco: 229,00, emEstoque: false },
    { nome: 'calça wide leg feminina', preco: 170,00, emEstoque: true },
    { nome: 'saia de praia', preco: 89,90, emEstoque: false },
    { nome: 'moletom cropped', preco: 135,00, emEstoque: false },
    { nome: 'blusa manga longa feminina', preco: 64,90, emEstoque: true },
    { nome: 'camiseta linho', preco: 110,00, emEstoque: false },
];

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);