#!/bin/sh
# compare.sh <sprite.png> <etiqueta> <salida.png>  — pone el sprite junto a la referencia, misma escala
REF=${REF:-/tmp/claude-0/-home-user-feria-dur/f1c98940-d114-5389-9849-b15ea7d1b380/scratchpad/ref/f01.png}
ffmpeg -y -loglevel error -i "$REF" -i "$1" -filter_complex "[0]format=gbrp,crop=144:216:136:44,scale=iw*3:ih*3:flags=neighbor,pad=520:760:44:56:white[a];color=white:s=36x54,format=gbrp[w];[1]format=gbrap[r];[w][r]overlay=format=gbrp,scale=iw*12:ih*12:flags=neighbor,pad=520:760:44:56:white[b];[a][b]hstack,drawtext=text='REFERENCIA':x=180:y=722:fontsize=26:fontcolor=0x291426,drawtext=text='$2':x=735:y=722:fontsize=26:fontcolor=0x291426" -frames:v 1 "$3"
