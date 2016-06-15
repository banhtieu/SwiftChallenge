FROM microsoft/dotnet:core-deps

COPY . /app
WORKDIR /app

RUN ["dotnet", "restore"]

ENTRYPOINT ["dotnet", "run"]