const catalogo = [
    {
        id: 1,
        nome: "CASA",
        metragem: "de 60m² até 100m²",
        preco: 100,
        nomeArquivoImagem: "image-1.jpg",
    },
    
    {
        id: 2,
        nome: "CASA",
        metragem: "de 101m² até 200m²",
        preco: 200,
        nomeArquivoImagem: "image-2.jpg",
    },
    
    {
        id: 3,
        nome: "CASA",
        metragem: "de 201m² até 300m²",
        preco: 300,
        nomeArquivoImagem: "image-3.jpg",
    },
    
    {
        id: 4,
        nome: "APARTAMENTO",
        metragem: "de 60m² até 100m²",
        preco: 100,
        nomeArquivoImagem: "image-4.jpg",
    },
    
    {
        id: 5,
        nome: "APARTAMENTO",
        metragem: "de 200m² até 300m²",
        preco: 300,
        nomeArquivoImagem: "image-5.jpg",
    },
    
    {
        id: 6,
        nome: "APARTAMENTO",
        metragem: "até 45m²",
        preco: 50,
        nomeArquivoImagem: "image-6.jpg",
    },
    
    {
        id: 7,
        nome: "APARTAMENTO",
        metragem: "de 301m² até 400m²",
        preco: 400,
        nomeArquivoImagem: "image-7.jpg",
    },
    
    {
        id: 8,
        nome: "APARTAMENTO",
        metragem: "de 101m² até 200m²",
        preco: 200,
        nomeArquivoImagem: "image-8.jpg",
    },
];

for (const produtoCatalogo of catalogo){
const cartaoProduto = `<div id= "card-image-1">
<img 
src="./image/${produtoCatalogo.nomeArquivoImagem}"
alt="Casa na Praia Laranja."
style="height: 200px;"
/>
<p>${produtoCatalogo.nome}</p>
<p>${produtoCatalogo.metragem}</p>
<p>R$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}