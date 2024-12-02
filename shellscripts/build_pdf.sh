#!/bin/bash

DIR="../tex/"

if [ ! -d "$DIR" ]; then
  echo "Directory $DIR does not exist. Creating it now."
  mkdir -p "$DIR"
else
  echo "Directory $DIR already exists."
fi

cd ../tex/

FILES="."
for texfile in "$FILES"/*.tex
do
    if [ -e "$texfile" ]; then
        xelatex -interaction=nonstopmode "$texfile"
        xelatex -interaction=nonstopmode "$texfile" #twice for safe compiling
        mv "${texfile%.tex}.pdf" ../html/pdf-sources/
    else 
        echo "No .tex files found in $FILES"
    fi
done

rm ../tex/*.*
touch ../tex/.gitkeep
