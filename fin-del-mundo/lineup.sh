#!/bin/sh
# lineup.sh <salida.png> — todos los personajes en fila sobre fondo claro, x10
S=art/out/sprites
ffmpeg -y -loglevel error -i $S/rex.png -i $S/luna.png -i $S/tomas.png -i $S/chispa.png -i $S/vacio.png -filter_complex "color=0xd9d4c4:s=200x62,format=gbrp[bg];[bg][0]overlay=3:5:format=gbrp[a];[a][1]overlay=42:5:format=gbrp[b];[b][2]overlay=81:5:format=gbrp[c];[c][3]overlay=122:35:format=gbrp[d];[d][4]overlay=160:5:format=gbrp,scale=iw*10:ih*10:flags=neighbor" -frames:v 1 "$1"
