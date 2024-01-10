const catalogo = [
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
    },
    
    {
        id: 1,
        nome: "FINANCEIRO",
        descricao: "DADOS DO SETOR FINANCEIRO",
        responsavel: "VANESSA",
        nomeArquivoImagem: "dados financeiro.png",
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
<p>${produtoCatalogo.descricao}</p>
<p>${produtoCatalogo.responsavel}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}