#!/usr/bin/env bash
# Zip the Vite `dist/` folder into dist.zip
# Run this after `npm run build` inside `cognitiva_tcc`
SOURCE_PATH="./cognitiva_tcc/dist"
OUT_ZIP="./dist.zip"

if [ ! -d "$SOURCE_PATH" ]; then
  echo "Source path $SOURCE_PATH not found. Run 'npm run build' first." >&2
  exit 1
fi

if [ -f "$OUT_ZIP" ]; then rm "$OUT_ZIP"; fi

echo "Creating $OUT_ZIP from $SOURCE_PATH..."
zip -r "$OUT_ZIP" -j "$SOURCE_PATH"/*
echo "Created $OUT_ZIP"
