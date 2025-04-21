# Consultas no DB

Este módulo fornece utilitários para o gerenciamento de agendamentos utilizando o banco de dados SQLite. As funções implementadas permitem ***criar***, ***consultar***, ***editar*** e ***excluir*** registros de agendamentos na tabela `schedules`.

## Funções

### createTable()

Verifica se a tabela `schedules` existe. Caso contrário, cria a tabela com as colunas `id`, `procedure`, `hour` e `value`. Esta tabela é utilizada para armazenar os agendamentos realizados.

#### Retorno

Não retorna valor. Em caso de erro, uma mensagem será exibida no console.

---

### createSchedule()

Esta função é responsável por criar um agendamento. Embora o código para inserir dados não esteja completamente implementado, ela garante que a tabela `schedules` exista antes de tentar criar um agendamento.

#### Retorno

Não retorna valor, mas assegura que a tabela `schedules` esteja pronta para a inserção de dados.

---

### getSchedules()

Retorna todos os registros presentes na tabela `schedules`, facilitando a leitura dos agendamentos existentes no banco de dados.

#### Retorno

Um array de objetos contendo todos os registros de agendamentos armazenados na tabela `schedules`.

---

### editSchedule(id, procedure, hour, value)

Permite editar um agendamento existente com base no seu `id`. Atualiza os campos `procedure`, `hour` e `value` do agendamento especificado.

#### Parâmetros

- `id` (number): Identificador único do agendamento a ser editado.
- `procedure` (string): Novo valor para o campo `procedure`.
- `hour` (string): Novo valor para o campo `hour`.
- `value` (number): Novo valor para o campo `value`.

#### Retorno

Não retorna valor. Em caso de sucesso, uma mensagem será exibida no console.

---

### deleteSchedule()

Esta função está preparada para excluir um agendamento, mas o código específico de remoção ainda não está implementado.

#### Retorno

Não implementado. Em sua versão atual, a função não realiza a exclusão de registros, mas o código para essa funcionalidade pode ser adicionado.

---

## Observações

- A função `createTable()` deve ser chamada ao iniciar o aplicativo ou antes de interagir com a tabela `schedules` para garantir que a estrutura da tabela esteja presente.
- A função `deleteSchedule()` precisa ser implementada para suportar a exclusão de agendamentos.
