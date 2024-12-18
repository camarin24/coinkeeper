package main

import (
	"log"

	"github.com/camarin24/coinkeeper/ui"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

	app.OnServe().BindFunc(func(e *core.ServeEvent) error {
		e.Router.GET("/{path...}", apis.Static(ui.DistDirFs, true)).Bind(apis.Gzip())
		return e.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
