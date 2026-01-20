# 🍞 Site Padaria Artesanal

Site profissional e moderno para padaria, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 📋 Características

✅ **Design Profissional** - Visual moderno e apetitoso  
✅ **100% Responsivo** - Funciona perfeitamente em desktop, tablet e mobile  
✅ **SEO Otimizado** - Meta tags e estrutura semântica  
✅ **Rápido e Leve** - Otimizado para performance  
✅ **Integração WhatsApp** - Botões de contato direto  
✅ **Google Maps** - Localização integrada  
✅ **Animações Suaves** - Experiência visual agradável  

## 🎨 Paleta de Cores

- **Marrom**: `#6B3E26` (Cor primária - remete a pão/café)
- **Bege Claro**: `#F5EBDC` (Cor secundária)
- **Dourado**: `#D4A574` (Cor de destaque)
- **Branco**: `#FFFFFF`
- **Verde WhatsApp**: `#25D366`

## 📁 Estrutura do Projeto

```
Padaria/
├── index.html          # Página inicial
├── sobre.html          # Sobre a padaria
├── produtos.html       # Catálogo de produtos
├── contato.html        # Página de contato
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── main.js         # JavaScript interativo
└── img/
    └── produtos/       # Imagens dos produtos
```

## 🚀 Como Usar

### 1️⃣ Personalização Básica

#### Alterar informações de contato:

Em **todos os arquivos HTML**, procure e substitua:

- `(99) 99999-9999` → Seu telefone
- `5599999999999` → Seu número WhatsApp (código do país + DDD + número)
- `contato@padaria.com` → Seu e-mail
- `Rua Exemplo, 123 - Bairro` → Seu endereço

#### Alterar nome da padaria:

Procure por `Padaria Artesanal` e substitua pelo nome da sua padaria.

#### Alterar horários:

Procure por:
```
Segunda a Sábado: 6h às 20h
Domingo: 6h às 13h
```

### 2️⃣ Adicionar suas próprias imagens

1. Coloque as fotos dos seus produtos na pasta `img/produtos/`
2. Nos arquivos HTML, substitua as URLs das imagens do Unsplash pelas suas:

**Antes:**
```html
<img src="https://images.unsplash.com/..." alt="Pão Francês">
```

**Depois:**
```html
<img src="img/produtos/pao-frances.jpg" alt="Pão Francês">
```

💡 **Dica**: Use imagens em formato JPG otimizadas (max 500KB cada)

### 3️⃣ Configurar Google Maps

1. Acesse [Google Maps](https://www.google.com/maps)
2. Procure o endereço da sua padaria
3. Clique em **"Compartilhar"**
4. Clique em **"Incorporar um mapa"**
5. Copie o código iframe
6. Cole no arquivo `contato.html` substituindo o iframe existente

### 4️⃣ Adicionar/Remover Produtos

No arquivo `produtos.html`, copie este bloco e personalize:

```html
<div class="product-item" data-category="paes">
    <div class="product-image">
        <img src="img/produtos/seu-produto.jpg" alt="Nome do Produto">
    </div>
    <div class="product-info">
        <h3>Nome do Produto</h3>
        <p>Descrição do produto</p>
        <a href="https://wa.me/5599999999999?text=Olá! Gostaria de encomendar..." 
           class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i> Pedir agora
        </a>
    </div>
</div>
```

**Categorias disponíveis** (data-category):
- `paes` - Pães
- `bolos` - Bolos
- `doces` - Doces
- `salgados` - Salgados
- `encomendas` - Encomendas Especiais

## 🌐 Como Publicar na Internet

### Opção 1: Hospedagem Gratuita - GitHub Pages

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório
3. Faça upload de todos os arquivos
4. Vá em Settings → Pages
5. Selecione a branch "main" e clique em Save
6. Seu site estará online em alguns minutos!

### Opção 2: Hospedagem Profissional

Recomendações:
- **Hostinger** - A partir de R$ 6,99/mês
- **Locaweb** - A partir de R$ 9,90/mês
- **UOL Host** - A partir de R$ 12,90/mês

### Opção 3: Netlify (Gratuito)

1. Acesse [Netlify](https://www.netlify.com)
2. Arraste a pasta do site para o Netlify Drop
3. Pronto! Site online instantaneamente

## 📱 Testar em Dispositivos Móveis

### Método 1: Abrir o arquivo diretamente
Abra o arquivo `index.html` no navegador do seu computador

### Método 2: Usar um servidor local
```powershell
# Se tiver Python instalado:
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

### Método 3: Visual Studio Code
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

## ⚙️ Personalizações Avançadas

### Mudar as cores do site

No arquivo `css/style.css`, encontre esta seção no início:

```css
:root {
    --cor-primaria: #6B3E26;        /* Sua cor principal */
    --cor-secundaria: #F5EBDC;      /* Cor de fundo */
    --cor-destaque: #D4A574;        /* Cor de destaque */
}
```

### Alterar fontes

No `<head>` dos arquivos HTML, substitua a importação do Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte&display=swap" rel="stylesheet">
```

E no CSS:
```css
:root {
    --fonte-principal: 'SuaFonte', sans-serif;
    --fonte-titulo: 'SuaFonteDeTitulo', serif;
}
```

### Ativar mensagem de cookies (LGPD)

No arquivo `js/main.js`, encontre a última linha e descomente:

```javascript
// showCookieMessage();  ← Remover as barras
showCookieMessage();
```

## 🔧 Funcionalidades Incluídas

- ✅ Menu responsivo para mobile
- ✅ Animações ao fazer scroll
- ✅ Filtro de produtos por categoria
- ✅ Formulário de contato com validação
- ✅ Máscara de telefone automática
- ✅ Botão flutuante do WhatsApp
- ✅ Botão voltar ao topo
- ✅ Smooth scroll entre seções
- ✅ Otimização de imagens
- ✅ SEO básico implementado

## 📊 Checklist de Lançamento

Antes de colocar o site no ar, confira:

- [ ] Trocou TODOS os telefones/WhatsApp
- [ ] Trocou o e-mail
- [ ] Trocou o endereço
- [ ] Configurou o Google Maps
- [ ] Alterou os horários de funcionamento
- [ ] Adicionou as fotos dos produtos
- [ ] Testou em celular e tablet
- [ ] Testou todos os links do WhatsApp
- [ ] Revisou todos os textos
- [ ] Comprou um domínio (opcional mas recomendado)

## 🎯 Próximos Passos Recomendados

1. **Comprar um domínio** (ex: minhapadaria.com.br)
2. **Criar redes sociais** (Instagram, Facebook)
3. **Configurar Google Analytics** para ver quantas visitas tem
4. **Fazer fotos profissionais** dos produtos
5. **Adicionar blog de receitas** (opcional)
6. **Sistema de pedidos online** (futuro)

## 💡 Dicas de Marketing Digital

- 📸 Poste fotos dos pães quentinhos no Instagram
- 🎯 Anuncie no Google Ads e Facebook Ads
- ⭐ Peça avaliações no Google Meu Negócio
- 📱 Compartilhe o link do site no status do WhatsApp
- 🎁 Faça promoções exclusivas para quem pediu pelo site

## 🆘 Suporte

Se tiver dúvidas:

1. Releia este README com atenção
2. Procure tutoriais no YouTube sobre "HTML básico"
3. Contrate um desenvolvedor freelancer no GetNinjas ou Workana

## 📄 Licença

Este projeto é livre para uso comercial. Você pode modificar e usar para sua padaria sem restrições.

---

**Desenvolvido com ❤️ e muito pão quentinho!** 🍞

**Última atualização**: Janeiro 2026
