#!/bin/bash

cd ./create-macro
sam build && sam deploy
cd ..
cd ./apply-macro
sam build && sam deploy