## Check the docker-compose.yml


```
version: "3.9"
    
services:
  db:
    
    ...
    
  wordpress:
    
    ... 

    volumes:
      - ./mu-plugins:/var/www/html/wp-content/mu-plugins
        (將本地的 mu-plugins 資料夾，映射到 image 上的 /var/www/html/wp-content/mu-plugins 內)
      - ./upload.ini:/usr/local/etc/php/conf.d/uploads.ini 
        (擴大上傳容量)
  
    ...

  phpmyadmin:
    
    ...

  frontend: 
    build:
      context: . 
      (「內容」設定為專案根目錄底下全部)
      dockerfile: ./Dockerfile
      (找「內容」底下的 ./Dockerfile)
    ports:
      - "3000:3000"
    restart: always
    volumes:
      - ./src:/app/src
      (映射本地 src 到 docker 的 src)
      - ./public:/app/public 
       (映射本地 public 到 docker 的 public)

volumes:
    ...
```

## 執行方式

> docker-compose up -d


## 編輯本地資料注意的地方有

1. 修改本地 mu-plugins 資料夾內容 .php 不需要重啟
2. 測試 rest_route 網址:
> A.:  http://localhost:8000/index.php?rest_route=/dtd/v1/projects

> B: http://localhost:8000/index.php?rest_route=/wp/v2/project

ㄋ

## 修改前端檔案自動更新(Hot Reload 要手動設定!)

1. package.json 修正
(參考資料: https://github.com/facebook/create-react-app/issues/1049)

```
"scripts": {
    "start": "CHOKIDAR_USEPOLLING=true craco start",
    ---
},
```
