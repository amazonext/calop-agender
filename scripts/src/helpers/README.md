# Documentação de funções criadas (helpers)

# Módulos

## Consultas no DB
Este módulo é responsável pelo gerenciamento local de dados relacionados a agendamentos utilizando SQLite. Ele implementa parcialmente as operações CRUD:

- Cria a tabela schedules caso não exista.

- Permite leitura e atualização de registros.

- Prepara a base para inserção e remoção de dados, ainda a serem implementadas.

[Ver detalhes]("./docs/db.md)

## Operações com o calendário
Este módulo lida com a integração ao calendário nativo do dispositivo via expo-calendar. Suas responsabilidades incluem:

- Solicitar permissões de acesso ao calendário.

- Criar e reutilizar calendários personalizados.

- Adicionar, editar e remover eventos baseados em informações de data, hora e descrição.

[Ver detalhes]("./docs/calendar.md)

## "Tradução" de meses das datas
Este módulo oferece uma interface utilitária para identificar o mês atual e o dia da semana, retornando essas informações em formato textual e em português. É útil para exibição em interfaces ou componentes que dependem de dados temporais localizados.

[Ver detalhes]("./docs/date.md)
