# Calendar Utils

Este módulo fornece utilitários para manipulação de eventos no calendário do dispositivo utilizando a biblioteca [expo-calendar](https://docs.expo.dev/versions/latest/sdk/calendar/). As funções implementadas permitem ***adicionar***, ***editar*** e ***remover*** eventos, bem como lidar com permissões e fontes de calendário.

## Funções

### addEvent(eventData)

Cria um novo evento no calendário.

#### Parâmetros

`eventData` (objeto):
- `title` (string): Título do evento.
- `description` (string): Descrição ou observação sobre o evento.
- `day` (number): Dia do mês (1–31).
- `month` (number): Mês do ano (1–12).
- `hourStart` (number): Hora de início (0–23).
- `hourEnd` (number): Hora de término (0–23).
- `minuteStart` (number): Minuto de início (0–59).
- `minuteEnd` (number): Minuto de término (0–59).

#### Retorno

Uma string indicando o sucesso ou erro da operação.

---

### removeEvent(id)

Remove um evento previamente criado.

#### Parâmetros

- `id` (string): Identificador único do evento a ser removido.

#### Exemplo de uso

```javascript
await removeEvent("event_id");
```

#### Retorno

Sem retorno. Loga uma mensagem no console com o status da operação.

---

### editEvent(id, updatedData)

Atualiza um evento existente.

#### Parâmetros

- `id` (string): Identificador do evento.
- `updatedData` (objeto): Propriedades a serem atualizadas no evento. Pode conter:
  - `title`, `startDate`, `endDate`, `notes`, `timeZone`, etc.

#### Exemplo de uso

```javascript
await editEvent("event_id", {
  title: "Novo título",
  startDate: new Date(2025, 3, 25, 10, 0),
  endDate: new Date(2025, 3, 25, 11, 0),
});
```

#### Retorno

Sem retorno. Loga uma mensagem no console com o status da operação.

---

## Permissões

A função `requestPermissions()` verifica e solicita as permissões de calendário necessárias para leitura e escrita.

---

## Fontes de Calendário

A função `getOrCreateCalendar()` verifica se já existe um calendário com o título `PROJECT_NAME`. Caso não exista, cria um novo calendário utilizando a fonte padrão do dispositivo.

---

## Utilitário: getEventDates

A função `getEventDates()` converte dados de data e hora em objetos `Date` que representam a data de início e fim de um evento.

---

## Dependências

É necessário instalar a biblioteca `expo-calendar`:

```bash
npx expo install expo-calendar
```

Além disso, configure as permissões apropriadas no `app.json`, `AndroidManifest.xml` ou `Info.plist`, conforme a plataforma (Android ou iOS).

---

## Observações

- A zona de tempo utilizada é `America/Belem`. Pode ser alterada conforme necessário.
- O identificador do evento (`id`) deve ser armazenado se edições ou exclusões futuras forem planejadas.