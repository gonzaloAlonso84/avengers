docker rmi -f $(docker images | grep -v 'REPOSITORY\|node' | awk {'print $3'})
