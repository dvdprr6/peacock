package com.peacock.engine
import zhttp.http._
import zhttp.http.middleware.HttpMiddleware
import zhttp.service.Server
import zio.clock.Clock
import zio.console.Console
import zio.{ExitCode, URIO, ZIO}

import java.io.IOException

object Main extends zio.App {
  private val PEACOCK_ENGINE ="peacock-engine"

  private def app(text: String): Http[Any, Nothing, Request, Response] = Http.collectZIO[Request] {
    case Method.GET -> !! / PEACOCK_ENGINE / "fruits" => ZIO.succeed(Response.text("Apple"))
  }

  private val middlewares: HttpMiddleware[Console with Clock, IOException] =
    Middleware.debug ++ Middleware.addHeader("X-Environment", "Dev")

  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    Server.start(8090, app("yee") @@ middlewares).exitCode
}
