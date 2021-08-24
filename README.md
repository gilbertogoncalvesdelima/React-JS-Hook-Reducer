# React useReducer hook 
useReducer é um gancho interno do React.
Neste artigo, você aprenderá o que é o gancho useReducer, para que ele é usado,
quando escolher o gancho useReducer e quando escolher o gancho useState. 
Para torná-lo mais fácil de entender do que frases longas e chatas, como usar o gancho useReducer em ação.

# Visão geral
O gancho useReducer permite que você gerencie o estado em um componente funcional 
e também fornece uma função que atualiza o estado e renderiza novamente o componente. 
É muito semelhante ao gancho useState, mas tem algumas vantagens em certos casos que
discutiremos posteriormente na seção Escolhendo entre useReducer e useState .
const [state, dispatch] = useReducer(reducer, initialState);

# Onde:
state : o estado retornado por useReducer.
despacho : uma função usada para atualizar o estado.
redutor : uma função que leva 2 argumentos: o primeiro é o estado anterior e o segundo 
é uma ação que é um objeto que contém informações usadas para atualizar o estado 
(Esta explicação pode ser um pouco confusa. Não se preocupe, os exemplos fornecido 
neste artigo irá mostrar que não é tão complicado).
initialState : o estado no início.

# Escolha entre useReducer e useState
Em palavras simples:

useReducer é melhor quando você tem estados complexos e conectados . Você pode escrever alguma lógica que basicamente é executada sempre que você deseja alterar o estado para fazer atualizações mais complexas do que apenas definir um novo valor.
useState é melhor quando seus estados NÃO são complexos e interdependentes . Nesses casos, usar useState torna seu código muito mais curto e fácil de entender do que usar useReducer.

# Descrição do Projeto
Um exemplo simples: useReducer + formulário de entrada
Este aplicativo de exemplo contém um formulário com uma entrada de texto e um botão. A entrada de texto permite que o usuário insira seu nome. O botão está desabilitado por padrão e só se torna habilitado quando o nome inserido é válido (presumimos que um nome é válido quando seu comprimento é maior ou igual a 3). Quando o botão é clicado, o que está na entrada de texto ficará claro.

# Para verificar o projetinho click no link
npm run build
https://react-use-reducer-hook.netlify.app/# react_use_reducer_hook
