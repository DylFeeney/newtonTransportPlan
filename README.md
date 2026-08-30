# Newton Transport Plan

Vue 3 starter application powered by Vite and Docker Compose.

## Run locally with Docker

Start the development server (and build the image on first run):

```sh
docker compose up --build
```

Open [http://localhost:5173](http://localhost:5173). Source changes are mounted into the container and Vite will reload the page automatically.

Stop the service:

```sh
docker compose down
```

To remove the container-managed dependency volume as well:

```sh
docker compose down --volumes
```

## Useful commands

Run a production build inside the container:

```sh
docker compose run --rm app npm run build
```

