FROM node:17-alpine
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
RUN npm install 

EXPOSE 8000

# run commands layer:
CMD [ "node","app.js" ]

