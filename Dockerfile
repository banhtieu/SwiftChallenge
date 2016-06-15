FROM microsoft/dotnet:onbuild

RUN apt-get update
RUN apt-get install -y clang libicu-dev

RUN wget https://swift.org/builds/swift-3.0-preview-1/ubuntu1404/swift-3.0-preview-1/swift-3.0-preview-1-ubuntu14.04.tar.gz --out swift30.tar.gz
RUN mkdir /swift30
RUN tar -xzf swift30.tar.gz -o /swift30


