# TimeTrack Component

## Inputs (taskName, taskTime)

- Asignar un nombre a la tarea (`taskName`) y setear un tiempo (`taskTime`).

## Acciones

- Al oprimir el boton Start(`startTime`) el contador en taskTime debera inciar
- Al hacer focus in en `taskTime` el contador debe parar
- Se podra editar el valor del contador
- Al hacer focus out el contador debe seguir con el valor indicado
- Al presionar `stop`, el contador debe parar
- Al presionar `stop`, se deben guardar los campos en un store en Redux agregando id secuencial
- `taskName` debera quedarse con el ultimo valor despues de agregar
- `taskTime` debe resetearse a 0 despues de agregar


# TimeTrackList Component

Listar elementos de store de redux

Listar el nombre de la tarea, con un id y la sumatoria del tiempo, el id debe ser la menor de todas las tareas con el mimo `taskName`

## Payload ejemplo

```json
[
    {
        "id": 0,
        "taskName": "mi task",
        "taskTime": 12
    },
    {
        "id": 1,
        "taskName": "mi task 2",
        "taskTime": 4
    },
    {
        "id": 2,
        "taskName": "mi task",
        "taskTime": 33
    },
    {
        "id": 3,
        "taskName": "mi task 3",
        "taskTime": 123
    },
    {
        "id": 4,
        "taskName": "mi task 3",
        "taskTime": 1
    },
]
```

## Lista en tabla esperada

| ID      | taskName | taskTime |
| ----------- | ----------- | ----------- |
| 0      | mi task       | 45       |
| 1   | mi task 2        | 4        |
| 3   | mi task 3        | 124        |


