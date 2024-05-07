## Compiling Static Resources into Go Files and Packaging Them into Executable

Original tutorial source: https://blog.enianteam.com/u/sun/content/211

> In order to simplify deployment and reduce the chances of errors, we will bundle frontend files into the executable file. The final program will have only one executable file after publication.

### 1. Installation
**Note: Include `...` as shown in the commands.**
```sh
go get github.com/go-bindata/go-bindata/...
go get github.com/elazarl/go-bindata-assetfs/...

# For go version >= 1.17, use the intsall command
go install -a -v github.com/go-bindata/go-bindata/...@latest
go install -a -v github.com/elazarl/go-bindata-assetfs/...@latest
```

### 2. After successful installation, add `GOPATH/bin` to the environment variable

Refer to the respective system's environment variable configuration.

### 3. Compress static files into the asset directory
The following command may encounter errors in `powershell` on Windows, so you can use `cmd` to execute it.
```sh
# Development environment, not actually compiling all files, so changes to static files take effect immediately
go-bindata-assetfs -debug -o=assets/bindata.go -pkg=assets static/... view/... # Multiple directories
go-bindata-assetfs -debug -o=assets/bindata.go -pkg=assets assets/... 

# Production environment, need to recompile after modifying static files
go-bindata-assetfs -o=assets/bindata.go -pkg=assets assets/... 
```
> Remove `-debug` in the production environment.

#### Reference Articles
Go | Packaging Static Files in Go Language and How to Use Them with Gin
https://www.jianshu.com/p/a7f5885679ef

[golang] Installing and Using go-bindata for Embedding Static Resources in Go
https://www.cnblogs.com/landv/p/11577213.html