# Flask Vue base

## Environment

- Python3
- Node >= 12

## Project requirements

- Flask
- Vuejs

## Project setup

- Create .env

```
cp .env.example .env
```

- Run docker

```
docker-compose up -d
```

- Install npm packages

```
npm install or yarn install
```

- Run web client

```
npm run dev or yarn dev
```

- Create venv

```
python3 -m venv venv
```

- Launch venv

```
source venv/bin/activate
```

- Install pip packages

```
pip3 install -r requirements.txt
```

- Start server

```
flask run
```

## Project structure

| Directory           | Description           |
| ------------------- | --------------------- |
| `client`            | Web client            |
| `client.assets`     | Web static files      |
| `client.components` | Vue components        |
| `client.layouts`    | Vue main layouts      |
| `client.pages`      | Vue main pages        |
| `client.router`     | Vue router management |
| `client.scss`       | Common scss           |
| `client.store`      | Vue store             |
| `client.utils`      | Common utils          |
| `server`            | Flask server          |
| `server.api`        | List apis             |
| `server.utils`      | Common utils          |
| `server.main`       | Flask app             |
| `views`             | View templates        |
