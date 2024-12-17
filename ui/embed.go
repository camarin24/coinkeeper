package ui

import (
	"embed"
	"io/fs"
)

//go:embed all:build
var distDir embed.FS

var DistDirFs, _ = fs.Sub(distDir, "build")
