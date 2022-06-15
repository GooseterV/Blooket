alts <- 2 # number of alts you have available
tokens <- 0 # total number of tokens you have (spread across all accounts)
days <- 30 # the amount of days you wish to see growth in

new <- (alts*days*500) + tokens # amount of tokens after n days (n is days var)
growth <- new - tokens # the growth in tokens over a period of time

paste("Starting tokens:", tokens)
paste("Alt Accounts:", alts)
paste("Days:", days)
paste("New Total:", new)
paste("Token Growth:", growth)