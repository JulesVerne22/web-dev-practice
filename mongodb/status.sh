#!/bin/zsh

if [[ $(ps aux | grep -v grep | grep mongod) == "" ]]; then
echo "Not running"
else
echo "Running"
fi
