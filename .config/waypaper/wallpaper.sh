#!/bin/bash

for _ in {1..5}; do
    mapfile -t images < <(swww query | sed -n 's/.*image: \(.*\)$/\1/p')
    (( ${#images[@]} )) && break
    sleep 1
done
[[ ${#images[@]} -eq 0 ]] && { echo "No wallpaper found"; exit 1; }

WALLPAPER=${images[0]}   # choose the first monitor’s wallpaper

# wal -i $WALLPAPER -e -n -s -t

matugen image $WALLPAPER

# ln -sf ~/.cache/wal/colors-kitty.conf ~/.config/kitty/16-colors.conf

# ~/.config/matugen/papirus-folders/change-icons.sh
