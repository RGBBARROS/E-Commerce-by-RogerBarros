const catalogo = [
    {
        id: 1,
        nome: "casa",
        metragem: "de 60m² até 100m²",
        preco: 100,
        nomeArquivoImagem: "image-1.jpg",
    },
    
    {
        id: 2,
        nome: "casa",
        metragem: "de 101m² até 200m²",
        preco: 200,
        nomeArquivoImagem: "image-2.jpg",
    },
    
    {
        id: 3,
        nome: "casa",
        metragem: "de 201m² até 300m²",
        preco: 300,
        nomeArquivoImagem: "image-3.jpg",
    },
    
    {
        id: 4,
        nome: "casa",
        metragem: "de 301m² até 400m²",
        preco: 400,
        nomeArquivoImagem: "image-4.jpg",
    },
    
    {
        id: 5,
        nome: "casa",
        metragem: "de 401m² até 500m²",
        preco: 500,
        nomeArquivoImagem: "image-5.jpg",
    },
    
    {
        id: 6,
        nome: "casa",
        metragem: "de 501m² até 600m²",
        preco: 600,
        nomeArquivoImagem: "image-6.jpg",
    },
    
    {
        id: 7,
        nome: "casa",
        metragem: "de 601m² até 700m²",
        preco: 700,
        nomeArquivoImagem: "image-7.jpg",
    },
    
    {
        id: 8,
        nome: "casa",
        metragem: "de 701m² até 800m²",
        preco: 800,
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
<p>${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}