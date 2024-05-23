# Salutho - Desafio de Estágio para Desenvolvedor de Software 

## Visão Geral
Este desafio consiste em desenvolver uma aplicação em React que interage com uma API Django para calcular o menor número inteiro divisível por todos os números dentro de um intervalo específico fornecido pelo usuário. A resposta é exibida na tela após o botão ser pressionado.


### Funcionalidades
- **Frontend:**
  - A aplicação possui um formulário com dois campos de entrada (input) para o usuário definir o intervalo que será calculado.
  - o formulario possui validação nos dados garantindo que:
      - Os números sejam inteiros positivos;
      - o intervalo não pode ser menor ou igual a zero;
  - Após a submissão do formulário, é feita uma requisição para o backend e o resultado é exibido na tela.

- **Backend (API Django):**
  - Possui uma rota que recebe dois números e faz o cálculo do MMC entre todos os numeros dentro desse intervalo.
  - Após fazer o cálculo, retorna o resultado para o frontend.

### Tecnologias
- **Frontend:** React (Next), Typescript, react-hook-form
- **Backend:** Django
- **Estilização:** styled-components

### Como rodar o projeto

1. Clone o repositório:
```git clone https://github.com/guicardosooliveira/internship-challenge.git```

2. Entre no diretório clonado:
```cd nome_do_diretório```

3. Abra o diretório do frontend:
```cd ./frontend```

4. Instale as dependencias:
```npm install```

5. Execute o comando a seguir para criar o arquivo .env.local, seguindo o formado do .env.exemplo
```cd .env.local.example .env.local```

6. Inicie o servidor:
```npm run dev```

7. Abra um novo terminal e entre no diretório do backend:
```cd ./backend```

8. Instale as dependências:
```pip install -r requirements.txt```

> Caso executado no windows, é recomendado executar o terminal em modo administrador.

8. Inicie o servidor:
```python manage.py runserver```

9. Abra o servidor local gerado pelo frontend e aproveite a calculadora!

> Observação: O backend utiliza CORS para permitir o compartilhamento de recursos entre diferentes origem. Por isso, certifique-se de que no arquivo settings.py, no diretório backend > backend, na parte do código CORS_ALLOWED_ORIGINS, a URL do seu servidor local frontend esteja correta. Além disso, certifique-se que na pasta env.local, no frontend, a URL do backend esteja definida corretamente.

## Contato

Se houver alguma dúvida, estou disponível nas formas de contato a seguir:

- gmail: guicardosodeoliveira@gmail.com
- linkedin: https://www.linkedin.com/in/guilherme-cardoso-oliveira/
- github: https://github.com/guicardosooliveira