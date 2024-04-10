#!/bin/bash

# Função para listar os subdiretórios do diretório atual
# listar_subdiretorios() {
#     clear
#     echo "Subdiretórios disponíveis:"
#     # Listar apenas diretórios no diretório atual
#     for subdiretorio in */; do
#         echo "$subdiretorio"
#     done
# }

# Defina o diretório principal
diretorio_principal="."

# script_dir="$diretorio_principal/scripts"

# Função para criar projeto React e copiar arquivos Docker
criar_projeto_react() {
    # Criar o projeto React
    npx create-react-app "$1"
    echo "Projeto React '$1' criado com sucesso."

    # Copiar Dockerfile, docker-compose.yml e pasta nginx para o diretório do projeto
    cp "../scripts/Dockerfile" "../scripts/docker-compose.yml" -a "../scripts/nginx" "$1"
    echo "Arquivos Docker copiados para o diretório do projeto."

    # Substituir placeholders no arquivo docker-compose.yml
    echo "$(basename $(dirname "$PWD"))"
    sed -i "s/\[pasta-principal\]/$(basename "$PWD")/g; s/\[pasta-react-criada\]/$1/g" "$1/docker-compose.yml"
}



# Verificar se o primeiro argumento é "react"
if [[ "$1" == "react" ]]; then
    # Pedir ao usuário para fornecer o nome do projeto React
    read -p "Digite o nome do projeto React que deseja criar: " nome_projeto_react
    
    # Verificar se o diretório do projeto React já existe
    if [ -d "$nome_projeto_react" ]; then
        echo "O diretório '$nome_projeto_react' já existe."
        exit 1
    fi
    
    # Criar o projeto React e copiar os arquivos Docker
    criar_projeto_react "$nome_projeto_react" "$diretorio_principal"
    exit 0
fi

# Entrar no diretório principal
cd "$diretorio_principal"

# Loop principal para escolher a pasta ou executar comandos dentro da pasta escolhida
while true; do
    # Perguntar ao usuário qual subdiretório deseja acessar

    # Verificar se a pasta escolhida existe
    if [ -d "$diretorio_principal" ]; then
        # Se a pasta existe, mudar para ela e sair do loop
        clear
        cd "$diretorio_principal"
        break
    fi
done

# Loop para executar comandos dentro da pasta escolhida
echo "Você está dentro da pasta: $(pwd)"
echo "Pressione Ctrl+C para sair."

# Aguardar até que o usuário pressione Ctrl+C para sair
trap "" INT
while true; do
    # Solicitar comando ao usuário
    read -p "$(pwd) $ " comando
    
    # Executar o comando
    eval "$comando"
done
