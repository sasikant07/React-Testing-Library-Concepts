import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        "users": [
          {
            name: "Leanne Graham",
          },
          {
            name: "Ervin Howell",
          },
          {
            name: "Clementine Bauch",
          },
        ],
      },
      { status: 200 }
    );
  }),
];

// const worker = setupWorker(...handlers);
// worker.start();
