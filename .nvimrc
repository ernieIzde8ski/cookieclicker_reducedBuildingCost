" Huh, the `vim` filetype _is_ more concise than doing the same thing in Lua


augroup local_cheaperBuildingCost
    autocmd!
    autocmd BufEnter info.txt setlocal filetype=json
augroup END
