# Clean Architecture

Example of an API with clean architecture

Tech Stack: Node + Express + Prisma + Jest

## Getting started ⚡️

Get ready your `.env` from `.env.sample` and run:
```bash
npm i
npx prisma db pull
```

## Architecture 🏛

The folders structure is following the clean/hexagonal architecture

| Folder | Description |
|---|---|
| `src/server.js` | Express server file |
| `src/router.js` | Auto-loader router |
| `src/config` | Contains all config files (feature flags, security, options, etc.) |
| `src/controllers` | Contains the HTTP & Events controllers by folder per resouce |
| `src/core` | Biz Logic functions used by controllers |
| `src/services` | Biz Operations that uses models (read/write from db, etc) |
| `src/models` | Source interfaces (ORM models, helpers, etc.) |
| `src/sources` | File per each data provider (mongo, redis, aws, etc.)|

## Remembering Tip 🧅

Each layer use the next one

- INPUT (controllers) 👇
- HANDLERS (core) 👇
- DOERS (services) 👇
- DATA INTERFACE (models) 👇
- OUTPUT (sources) 👇
