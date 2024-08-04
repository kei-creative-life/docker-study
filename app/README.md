# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 補足
- backendコンテナとの通信確認
```
docker exec -it app-nuxt-app-1 ping backend

// ex: いい感じ
PING backend (172.18.0.4): 56 data bytes
64 bytes from 172.18.0.4: seq=0 ttl=64 time=0.184 ms
64 bytes from 172.18.0.4: seq=1 ttl=64 time=0.105 ms
64 bytes from 172.18.0.4: seq=2 ttl=64 time=0.073 ms
64 bytes from 172.18.0.4: seq=3 ttl=64 time=0.266 ms
64 bytes from 172.18.0.4: seq=4 ttl=64 time=0.267 ms
64 bytes from 172.18.0.4: seq=5 ttl=64 time=0.195 ms
64 bytes from 172.18.0.4: seq=6 ttl=64 time=0.124 ms
64 bytes from 172.18.0.4: seq=7 ttl=64 time=0.209 ms
64 bytes from 172.18.0.4: seq=8 ttl=64 time=0.136 ms
```
