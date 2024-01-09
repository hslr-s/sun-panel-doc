# Compilation and Execution

## Frontend
```sh
# Development run
pnpm dev

# Compile and package (generates the dist directory; if used in conjunction with the backend, change it to 'web')
pnpm build
```

## Backend

1. Before formally compiling the program, enter the `service` directory.

2. Follow the [Static Resource Compilation Tutorial](./backend_static_compilation) to compile backend static files.

3. Formal compilation
```sh
# Enter the backend project
cd service

# Development run
go run main.go

# Compile and package
go build -o sun-panel main.go
```

## Docker

::: warning 
Before executing the commands, ensure that you have cloned the project code and use the command line to navigate to the project root directory.
:::

Build the Docker image
```sh
docker build -t sun-panel .
```

Run (replace `D:\docker\data\sun-panel` with the local development path)
```sh
docker run --rm -d -p 3003:3002 -v D:\docker\data\sun-panel\conf:/app/conf -v D:\docker\data\sun-panel\runtime:/app/runtime -v D:\docker\data\sun-panel\uploads:/app/uploads -v D:\docker\data\sun-panel\database:/app/database --name sun-panel sun-panel
```