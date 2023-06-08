FROM node:14-slim
# parent image layer:
# 17 => version of node.js
# alipne => dittrubtion of linux


#workdir => containe all source code
# this the path
WORKDIR /app


# source code layer
COPY . .

# dependensies layer: 
# all dependencies we are using into this app
# <npm install> => install all dependensies
# this command will run indide the path workdir
# Install dependencies

RUN apt-get update && apt-get install -y openssl

RUN npm install 

EXPOSE 8000

# run commands layer:
CMD [ "node","index.js" ]



