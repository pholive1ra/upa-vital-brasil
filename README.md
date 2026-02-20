# UPA Vital Brasil

Sistema web para gestão de filas e triagem em Unidades de Pronto Atendimento (UPAs). O objetivo é reduzir a aglomeração, fazendo com que as pessoas possam circular pelo externo do local, sem preocupações com "perca de lugar" na fila.

## Stack
- React
- TypeScript
- Tailwind CSS

## Módulos
- **Acompanhamento:** Visualização em tempo real da posição na fila e tempo estimado.
- **Triagem:** Interface administrativa para a enfermagem classificar o risco (Azul a Vermelho).

## Estrutura do Projeto
- `src/components/ui/` -> Componentes visuais burros e genéricos (botões, inputs).
- `src/components/` -> Componentes específicos com regras de negócio da UPA.
- `src/hooks/` -> Lógicas de estado e regras isoladas do React.
- `src/lib/` -> Funções utilitárias em TypeScript puro.
- `src/pages/` -> Telas completas e rotas.

## Como rodar localmente

Requisitos: Node.js instalado.

```bash
git clone https://github.com/pholive1ra/upa-vital-brasil.git
cd upa-vital-brasil
npm install
npm start


To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> 6b171cb (Estrutura inicial: React, Tailwind e Cabeçalho)
