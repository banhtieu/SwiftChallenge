FROM microsoft/dotnet:onbuild

RUN apt-get update
RUN apt-get install -y clang libicu-dev npm nodejs
RUN ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /dotnetapp/wwwroot
RUN npm install -g npm
RUN npm update
RUN npm typings
RUN npm tsc

WORKDIR /dotnetapp

RUN wget https://swift.org/builds/swift-3.0-preview-1/ubuntu1404/swift-3.0-preview-1/swift-3.0-preview-1-ubuntu14.04.tar.gz
RUN tar xzf swift-3.0-preview-1-ubuntu14.04.tar.gz
RUN mv ./swift-3.0-preview-1-ubuntu14.04 /swift30


