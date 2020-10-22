1. 搜索镜像
> docker search 镜像名
```
docker search centos
```

2. 下载镜像
> docker pull 搜索出来的镜像名
```
docker pull centos
```

3. 运行镜像并创建容器
> docker run -dti -p 宿主端口:容器内端口 -v 宿主目录:容器目录 -e "环境变量名=变量值" --name 别名 --link 另一个容器名:取别名 镜像名:tag 运行命令 
> -d 让容器在后台以守护态运行，-t 让docker分配一个伪终端，-i 让容器标准输入打开  
> -p 映射本地端口到容器内部端口，宿主机端口:容器内部端口
> -v 挂载目录，宿主机目录:容器内部目录，可以挂载整个目录或单个文件
> --name 为容器指定一个名称
> -e 设置环境变量
> --link 添加链接到另一个容器
> 最后容器需要运行一个进程，否则容器会退出，/bin/bash会启动bash终端，允许用户进行交互
```
docker run -dti -p 10911:10911 -p 10909:10909 -v `pwd`/data/broker/logs:/home/rocketmq/logs -v `pwd`/data/broker/store:/home/rocketmq/store --name rmqbroker --link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" centos:7 /bin/bash
```

4. 启动容器
> docker start 容器id

5. 进入容器
> docker attach 容器id
> 进入容器的前提是创建容器的时候设置了-t -i 参数，并运行了/bin/bash

6. 备份到镜像文件
> docker commit -m '描述信息' -a '作者' 容器id 镜像名:tag
```
docker commit -m 'RocketMQ+java+centos' -a 'denis' 27439ca118a6 cenots:rkmq
```

7. 查看容器日志
> docker logs -f -t --tail=100 容器id  

8. 运行容器内命令
> docker exec -it 容器id 命令
```
# 查看当前目录文件
docker exec -it 27439ca118a6 ls

# 打印abc.txt内容
docker exec -it 27439ca118a6 cat abc.txt
```

9. 查看所有镜像
> docker images

10. 查看容器运行状态
> docker ps
> docker ps -a #加上-a参数查看包括不运行的容器

11. 停止容器运行
> docker stop 容器id

12. 强制停止容器
> docker kill 容器id

13. 重启容器
> docker restart 容器id

14. 删除容器
> docker rm 容器id  
> 删除之前要先停止容器docker stop，或者加上参数-fv，docker rm -fv 容器id

15. 删除镜像
> docker rmi 镜像id
> 删除镜像之前不能有用此镜像的容器在运行


#### 如何退出容器而不停止容器？组合键：Ctrl+P+Q
