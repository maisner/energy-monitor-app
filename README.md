# Energy monitor WEB App

### ENV variables
```dotenv
VUE_APP_API_URL=http://localhost:8080
```

### Scripts
- `npm run serve` Compiles and hot-reloads for development
- `npm run build` Compiles and minifies for production
- `npm run lint` Lints and fixes files


### Docker
- build `docker build -t energy-app .`
- run `docker run -p 8080:80 -e VUE_APP_API_URL=http://localhost:8080 energy-app`
