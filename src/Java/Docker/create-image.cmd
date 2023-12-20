docker build --no-cache -f SQL\Dockerfile.PostgreSql -t serezhatatarincev2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t serezhatatarincev2-java/app ../../..
