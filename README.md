# Martian robots

- [x] App working
- [x] Readme
- [x] Testing (Unit)
- [x] Script approach
- [x] Rest api approach
- [x] Persistence layer for grids (MongoDB)
- [x] Insights (get explored surface)
- [x] Shipping (Docker)

## Installation

```bash
npm install
```

## Usage

Script

```bash
npm run start-script
```

Rest

```bash
npm run start-server
```

## Docker

Script

```bash
docker build -t martian-script -f .\docker\script\Dockerfile .
docker run martian-script
```

Rest

```bash
docker build -t martian-rest -f .\docker\rest\Dockerfile .
docker run -p 3000:3000 martian-rest
```
