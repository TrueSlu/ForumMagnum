FROM node:15.5.0

RUN apt-get update && apt-get install -y bsdmainutils

WORKDIR /usr/src/app

# Copy only files necessary for yarn install, to avoid spurious changes
# triggering re-install
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY public/lesswrong-editor public/lesswrong-editor
COPY scripts/postinstall.sh scripts/postinstall.sh

# clear the cache -- it's not useful and it adds to the time docker takes to
# save the layer diff
RUN yarn install && yarn cache clean
COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "production" ]
