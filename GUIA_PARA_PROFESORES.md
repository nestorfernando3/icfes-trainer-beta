# 🍎 Guía para Profesores: Carga de Preguntas

Este documento explica cómo utilizar la **Plantilla de Preguntas** para agregar nuevo contenido al simulador ICFES.

## 📂 Archivo de Plantilla
Utilice el archivo `PLANTILLA_BANCO_PREGUNTAS.csv` que se encuentra en esta carpeta. Puede abrirlo directamente con **Microsoft Excel** o **Google Sheets**.

## 📝 Instrucciones de Llenado

Cada fila del archivo representa una pregunta. Por favor, no modifique los títulos de las columnas.

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| **ID** | Número único para identificar la pregunta. | `101` |
| **Tema** | Áreas del conocimiento. <br>Use: `Matemáticas - Álgebra`, `Matemáticas - Geometría`, `Lectura Crítica`, etc. | `Matemáticas - Estadística` |
| **Texto / Contexto** | El párrafo o situación que el estudiante debe leer antes de responder. | `En una encuesta de 100 personas...` |
| **Pregunta** | El enunciado específico de la pregunta. | `¿Cuál es el promedio de edad?` |
| **Opción A - D** | Las 4 posibles respuestas. | `20 años` |
| **Respuesta Correcta** | Número que indica la opción correcta: <br>**1** = A<br>**2** = B<br>**3** = C<br>**4** = D | `3` (Indica que la C es correcta) |
| **Explicación** | Justificación pedagógica que aparecerá si el estudiante falla o acierta. | `Se suma el total y se divide por...` |
| **Fuente** | Origen de la pregunta (Simulacro, Autoría propia, ICFES 202x). | `Simulacro 2025` |

## ⚠️ Notas Importantes
1. **No deje filas vacías** entre preguntas.
2. **Respuesta Correcta**: Asegúrese de usar solo los números 1, 2, 3 o 4. No escriba la letra "A" o el texto de la respuesta.
3. **Guardado**: Al terminar, guarde el archivo manteniendo el formato **CSV (Delimitado por comas)** para facilitar su importación a la App.

## 🚀 ¿Cómo subir el archivo?
Envíe el archivo actualizado al administrador del sistema (Desarrollador) para que lo integre en la siguiente actualización de la plataforma.
