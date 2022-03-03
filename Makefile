start: ## set up tunneling, start mongodb, server and client
		bash ./set_localtunnel.sh
		docker-compose up --build

# generate help info from comments: thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help: ## help information about make commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: start-server
start-server: ## starts site-wide-warning server
		docker-compose up server

.PHONY: start-client 
start-client: ## starts site-wide-warning client
		docker-compose up client 

.PHONY: reseed
reseed: ## resends mongodb database
		docker-compose up mongoseed

.PHONY: start-mongodb
start-db: 
		docker-compose up mongodb

.PHONY: setup-tunneling
setup-tunneling: 
		bash ./set_localtunnel.sh

