FROM microsoft/dotnet:onbuild

RUN wget https://deb.nodesource.com/setup_4.x 
RUN chmod +x ./setup_4.x
RUN ./setup_4.x

RUN apt-get update
RUN apt-get install -y clang libicu-dev nodejs

WORKDIR /dotnetapp/wwwroot


RUN npm install -g npm
RUN npm update
RUN npm run-script typings install
RUN npm run-script tsc

WORKDIR /dotnetapp

RUN wget https://swift.org/builds/swift-3.0-preview-1/ubuntu1404/swift-3.0-preview-1/swift-3.0-preview-1-ubuntu14.04.tar.gz
RUN tar xzf swift-3.0-preview-1-ubuntu14.04.tar.gz
RUN mv ./swift-3.0-preview-1-ubuntu14.04 /swift30

ENV PATH=$PATH:/swift30/usr/bin


