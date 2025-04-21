# "Tradução" de Meses das Datas

Este módulo fornece uma função para obter informações sobre a data atual, especificamente o mês e o dia da semana, de forma textual e localizada para o idioma português. A função implementada retorna um objeto com o nome do mês atual e o dia da semana.

## Funções

### month()

Retorna um objeto com duas propriedades:

- **day** (number): Representa o dia da semana (0 para domingo, 1 para segunda-feira, etc.).
- **month** (string): Nome do mês atual em português. O nome do mês é determinado com base no mês retornado pela função `getMonth()` do objeto `Date`.
