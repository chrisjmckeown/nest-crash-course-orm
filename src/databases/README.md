## Creating and running migrations locally
1. To create a migration run `npm run typeorm -- migration:create ./src/databases/migrations/<MigrationName>`
2. To run them locally, run `npm run build && npm run typeorm migration:run -- -d src/databases/dataSource.ts`.
    1. If you need to amend your migration, first revert the previous migration run and run npm run typeorm -- -d src/databases/dataSource.ts migration:revert



