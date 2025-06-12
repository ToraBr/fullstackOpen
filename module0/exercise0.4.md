```mermaid
sequenceDiagram
   Note left of Browser: user Clicks Button

    Browser->>+Server: Post request http..../new_note
    Server->>+Browser: URL redirect, Do get http.../notes
    Browser->>+Server: GET request http.../notes
    Server->>+Browser: GET reply, HTML-Code
    Browser->>+Server: GET request main.css
    Server->>+Browser: GET reply, the css-file
    Browser->>+Server: GET request main.js
    Server->>+Browser: GET reply, the js-file
    Note left of Browser: executing jS-code
    Browser->>+Server: GET request data.json
    Server->>+Browser: Get reply, Json file(containing notes)
 Note left of Browser: Browser renders json file to dosplay notes
  ```
