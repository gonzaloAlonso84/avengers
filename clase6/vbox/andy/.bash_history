uname
uname -a
ls
pwd
ls -all
mkdir .ssh
cd .ssh/
ls
touch authorized_keys
vim authorized_keys 
exit
ls
ls -all
docker
git
git --version
ls -all
ls
cd .ssh/
ls
pwd
ls
touch config
vim config 
ls
ssh-keygen 
ls -all
pwd
vim config 
ls
cat config | grep para
cat paragithub.pub 
ls
cd ..
ls
ls -all
git
ls
pwd
mkdir repos
cd repos/
git clone git@github.com:arteysoft/losBorbotones.git
ls
cd
ls
pwd
ls -all
cd .ssh/
ls
vim config 
cd ..
ls
cd repos/
ls
git clone git@github.com:arteysoft/losBorbotones.git
cd
cd .ssh/ls
ls -all
cd .ssh/
ls
vim config 
cd
exit
ls
cd repos/
git clone git@github.com:arteysoft/losBorbotones.git
cd ../.ssh/
ls
vim config 
exit
ls -all
ip a
ls
cd repos/
ls
ls -all
ls
git clone git@github.com:arteysoft/losBorbotones.git
ls -all
cd losBorbotones/
ls
ls -all
vim ejercicio.txt 
git status
git add .
git status
git commit -m "borra ejercicio"
git config --global user.email "arteysoft@gmail.com"
git congig --global user.name "andy"
git config --global user.name "andy"
git status
git commit -m "borro ejercicio"
git status
git branch
git status
git log
git status
git push origin master
ls -all
cd ..
rm -rf losBorbotones/
sudo -i
ls -all
docker
git
ls -all
cd .ssh/
ls
cat config 
ls -all
sudo apt-updated
sudo apt-update
sudo apt update 
cd 
ls
pwd
ls -all
cd repos/
ls
cd ..
rm -rf repos/
ls
ls -all
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
Agregue el repositorio de Docker a las fuentes de APT:
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
sudo apt-cache policy docker-ce
sudo apt install docker-ce
groups
docker
docker images
systemctl status docker
docker images
sudo usermod -aG docker ${USER}
groups
docker
docker images
exit
ls -all
ip a | grep 0.0
ip a | grep 192.168
docker images
groups
ls -all
docker images
ls -all
mkdir repos
cd repos/
ls -all
git clone git@github.com:arteysoft/visionPedagogica.git
cl
ls
cd visionPedagogica/
ls
cd trucos/
ls
ls -all
touch ssh-tips.txt
cd ..
ls
cd misguias/
ls
cd ..
ls
cd tutoriales/
ls
cd ..
cd trucos/
ls
vim ssh-tips.txt 
ls
cat /home/andy/.ssh/config 
ls
vim ssh-tips.txt 
cd 
cd repos/
cd visionPedagogica/
git status
git add .
git commit -m "agrega todo ssh"
ls -all
git status
cd ..
git status
cd visionPedagogica/
git status
git log
git push origin master
ls -all
cd ..
rm -rf repos/
ls -all
docker images
ls -all
sudo -i
ls
docker
mkdir dockerfiles
cd dockerfiles/
touch Dockerfile
vim Dockerfile 
ls
docker 
docker help build
docker help build | less
docker build
ls
docker build .
ls
cat Dockerfile 
ls
docker images
docker run node npm
docker run --entrypoint npm node install underscore
ls
vim Dockerfile 
docker build .
docker run --entrypoint cat /root/.npm/__logs/2020-12-30T16_44_44_551Z-debug.log
docker run --entrypoint cat node /root/.npm/__logs/2020-12-30T16_44_44_551Z-debug.log
docker run --entrypoint /bin/bash node
docker ps
docker run -it --entrypoint /bin/bash node
docker ps
docker ps -a
ls -all
touch borrar-containers.sh
docker images
docker ps -a
docker ps -a | awk {print $a}
docker ps -a | awk '{print $a}'
docker ps -a | awk '{print $1}'
docker ps -a | awk '{print $1}' | grep -v CON
docker remove $(docker ps -a | awk '{print $1}' | grep -v CON)
docker 
docker rmi $(docker ps -a | awk '{print $1}' | grep -v CON)
docker rm $(docker ps -a | awk '{print $1}' | grep -v CON)
ls
vim borrar-containers.sh 
ls
ls -all
chmod 665 borrar-containers.sh 
ls -all
ls
ls -all
. ./borrar-containers.sh 
ls -all
cat borrar-containers.sh 
ls -all
cat Dockerfile 
vim Dockerfile 
ls
vim Dockerfile 
ls
ls -all
vim Dockerfile 
ls
docker build .
vim Dockerfile 
ls
docker images
docker ps
docker build .
docker ps
docker images
vim Dockerfile 
docker build .
cat Dockerfile 
ls
vim Dok
vim Dockerfile 
ls
ls -all
path
echo $path
echo path
echo %path%
echo $PATH
ls -all
node
ls -all
ls
ls -all
cat Dockerfile 
ls -all
docker ps -a
./borrar-containers.sh
bash ./borrar-containers.sh 
ls -all
docker build
docker build .
ls -all
docker images
docker help build
docker help build | less
cat Dockerfile 
ls
docker iamges
docker images
ls -all
docker build -t andy/1 .
ls -all
docker images
docker run andy/1
docker run andy/1 node
vim Dockerfile 
docker run andy/latest node
ls
docker build -t andy/ultima .
docker images
docker run andy/ultima
docker images
docker images | grep -V RESPOST
docker images 
docker images | grep 'REPOSITORY'
docker images | grep 'REPOSITORY\|none'
docker images | grep 'REPOSITORY\|node'
docker images | grep -v 'REPOSITORY\|node'
docker images | grep -v 'REPOSITORY\|node' | awk }
docker images | grep -v 'REPOSITORY\|node' | awk {'print $3'}
docker rmi $(docker images | grep -v 'REPOSITORY\|node' | awk {'print $3'})
docker rmi -F $(docker images | grep -v 'REPOSITORY\|node' | awk {'print $3'})
docker rmi -f $(docker images | grep -v 'REPOSITORY\|node' | awk {'print $3'})
ls
vim borrar-imagenes.sh
ls
ls -all
chmod 665 borrar-imagenes.sh 
ls -all
vim borrar-imagenes.sh 
ls -all
vim borrar-imagenes.sh 
ls
docker images
ls -all
chmod 655 borrar-imagenes.sh 
docker images
ls -all
chmod 645 borrar-imagenes.sh 
ls -all
vim borrar-imagenes.sh 
ls -all
cat borrar-
cat borrar-imagenes.sh 
vim borrar-imagenes.sh 
bash borrar-imagenes.sh 
ls -all
docker images
docker ps
docker ps -a
bash borrar-containers.sh 
cat Dockerfile 
ls -all
ls
ls -all
catD+
dc
dlc
docker images
ls -all
cat Dockerfile 
docker help build
docker images
docker build -t andy:1 .
ls -all
docker images
docker run andy:1
docker run -it --entrypoint /bin/bash andy:1
ls -all
docker run andy:1 ls
docker run --entrypoint ls andy:1 -all
ls -all
ls
ls -all
cat Dockerfile 
ls -all
docker run --entrypoint node andy:1 sarasa.js
touch prueba.js
ls -all
vim prueba.js 
ls -all
cat Dockerfile 
vim prueba.js 
ls -all
vim Dockerfile 
ls -all
docker build -t andy:2 .
ls -all
docker images
docker run --entrypoint node andy:2 prueba.js
vim prueba.js 
docker build -t andy:3 .
docker run andy:3
docker run andy:3 node prueba.js
docker run --entrypoint node andy:3 prueba.js
cat prueba.js 
cat prueba.js Dockerfile | grep MON
vim prueba.js 
ls -all
docker images
docker build -t andy:4 .
docker run --entrypoint node andy:4 prueba.js
docker help run
docker help run| more
docker help run| grep env
docker run --entrypoint -e MONGO_IP=EHHMONO node andy:4 prueba.js
docker run --entrypoint node -e MONGO_IP=EHHMONO andy:4 prueba.js
docker run --entrypoint node -e IP_MONGO=EHHMONO andy:4 prueba.js
ls -all
cd ..
ls
ls -all
mkdir git
cd git/
git clone git@github.com:arteysoft/visionPedagogica.git
ls
cd visionPedagogica/
ls
mkdir docker
ls
ls -all
cd ..
ls
cd 
ls
cd dockerfiles/
ls
mkdir /home/andy/git/visionPedagogica/docker/build
cp . /home/andy/git/visionPedagogica/docker/build/
cp . /home/andy/git/visionPedagogica/docker/build/.
cp . /home/andy/git/visionPedagogica/docker/build/*
cp * /home/andy/git/visionPedagogica/docker/build/*
cp * /home/andy/git/visionPedagogica/docker/build/
cd /home/andy/git/visionPedagogica/
git status
git diff
git add .
git status
git commit -m "agrego docker build"
ls -all
git log
git push origin master
ls
ls a-all
ls -all
cd /
exit
ip a
sudo -i
ls -all
docker ps
whoami
ls -all
docker images
ls
cd dockerfiles/
ls
cat Dockerfile 
ls -all
ls
docker images
docker run andy:4
ls
node
ls
cd 
ls
cd
pwd
ls -all
mkdir downloads
cd downloads/
wget https://nodejs.org/dist/v14.15.3/node-v14.15.3-linux-x64.tar.xz
ls
tar
man tar
tar --list --file node-v14.15.3-linux-x64.tar.xz
tar xvf node-v14.15.3-linux-x64.tar.xz node-v14.15.3-linux-x64/
ls -all
sudo mv node-v14.15.3-linux-x64 /opt/
ls /opt/node-v14.15.3-linux-x64/
ls -all /opt/node-v14.15.3-linux-x64/
ls -all /opt
groups
cd
vim .bashrc 
ls /opt/node-v14.15.3-linux-x64/bin/
vim .bashrc 
bash .bashrc 
read .bashrc
ls -all
read
read .bashrc 
exit
vim .bashrc
read .bashrc 
read ./.bashrc 
exit
docker ps
docker attach -it nice_mendel 
docker attach nice_mendel 
exit
node
ls 
cd dockerfiles/
ls
ls -all
touch ever.js
vim ever.js 
node ever.js 
ls
vim ever.js 
node  ever.js 
vim ever.js 
node ever.js 
ls
cat Dockerfile 
node prueba.js 
vim Dockerfile 
ls
vim Dockerfile 
docker build -t andy:6 .
ls -all
docker images
docker run andy:6
ls 
ls -all
docker run -d andy:6
ls -all
docker ps
docker
ls
docker ps
docker logs sharp_mclean 
ls
docker images
docker ps
docker rename sharp_mclean activa
docker ps activa
dicker ps 
docker ps  | grep acti
docker logs activa 
date +%s
docker logs activa 
date +%s
docker logs activa 
docker logs activa
docker logs activa | head
docker logs activa
ls -all
cat Dockerfile 
ls -all
docker images
docker ps -a
ls
bash ./borrar-imagenes.sh 
ls -all
chmod 766 borrar-imagenes.sh 
ls -all
./borrar-imagenes.sh 
cat borrar-imagenes.sh 
vim borrar-imagenes.sh 
./borrar-imagenes.sh 
ls
docker ps
docker logs activa 
ls -all
docker logs activa | wc -l
ls -all
docker ps -ap
docker ps -a
ls -all
chmod 760
ls -all
chmod 760 borrar-containers.sh 
docker ps
ls -all
chmod 740 borrar-imagenes.sh 
ls -all
./borrar-imagenes.sh 
docker ps -a
./borrar-containers.sh 
docker ps -a
docker logs activa 
docker logs activa | wc -l
ls -all
crontab -e
cd
mkdir expe
cd expe/
touch $(date +%s)
ls -all
touch $(date +%s)
ls -all
sudo -i
ls
docker ps
docker stop nice_mendel 
ip a
ip a | grep 192
ls -all
ls
ls -al
ls -ll
sudo -i
ls -all
docker ps
docker images
ls -all
cd dockerfiles/
ls
node
exit
ip a
ip a | grep 192
sudo shutdown 0
ls
ls -al
up a
ip a | grep 193
ip a | grep 192
exit
ls -all
pwd
ls -all
ssh root@159.203.117.135
ssh -i .ssh/paragithub root@159.203.117.135
ls
ls -all
docker ps
docker rename upbeat_newton mi-proyecto-node
docker ps
ls -all
ls
ssh -i .ssh/paragithub root@159.203.117.135
exit
ls
docker ps
docker rename proc1
docker ps
docker rename admiring_galileo proc1
docker ps
docker inspect proc1
curl localhost:172.17.0.2
curl localhost:172.17.0.2:3000
curl 172.17.0.2:3000
exit
