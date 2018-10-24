
# Define the image to start from
FROM node:10

# Create the working directory
WORKDIR /usr/app

# Install the dependencies
COPY package.json ./
RUN  npm install

# Bundle app source
COPY . .

# Expose webhook port
EXPOSE 3000

# Start the server (*)
RUN  npm run initialize
CMD  ["node", "dist/src/index.js"]

# (*)
#   environment variables need to be set while
#   prompting, e.g. `docker run -e VARIABLE=value`
