FROM node:18-alpine

WORKDIR /app

# コピーするファイルを最小限に抑え、ビルド時間を短縮
COPY package*.json ./
COPY nuxt.config.ts ./

RUN npm install

# その他のソースファイルをコピー
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]