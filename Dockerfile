FROM nginx:alpine

# Copie seus arquivos para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80 para que o Nginx sirva o conteúdo
EXPOSE 80
