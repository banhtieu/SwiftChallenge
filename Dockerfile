FROM microsoft/dotnet:1.0.0-rc2-core-deps

RUN apt-get install apt-transport-https
RUN printf "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet/ trusty main" > /etc/apt/sources.list.d/dotnetdev.list

RUN apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893
RUN apt-get update

RUN apt-get install dotnet-dev-1.0.0-preview1-002702

COPY . /app
WORKDIR /app
RUN ["dotnet", "restore"]

EXPOSE 5000/tcp
ENTRYPOINT ["dotnet", "run"]
