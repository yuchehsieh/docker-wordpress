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

volumes:
    ...
```

## 執行方式

> docer-compose up -d


## 編輯本地資料注意的地方有

1. 修改本地 mu-plugins 內容 .php 不需要重啟