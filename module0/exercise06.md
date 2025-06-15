```mermaid
    Browser->>+Server: POST request, https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note left of Browser: json with content of post and date
    Server->>+Browser: Response: created
    Note left of Browser: JS code executed. eventhadler->renders note to display
```
